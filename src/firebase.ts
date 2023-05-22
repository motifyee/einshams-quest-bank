import { initializeApp } from 'firebase/app';
import {
    collection,
    getFirestore,
    getDocs,
    addDoc,
    serverTimestamp,
    deleteDoc,
    doc,
} from 'firebase/firestore';

export const firebaseApp = initializeApp({
    apiKey: 'AIzaSyBWmWIAPvA97sn2RpVx0mfTBmCcgX-98o4',
    authDomain: 'fir-computers-ip.firebaseapp.com',
    databaseURL: 'https://fir-computers-ip.firebaseio.com',
    projectId: 'fir-computers-ip',
    storageBucket: 'fir-computers-ip.appspot.com',
    messagingSenderId: '369476238484',
    appId: '1:369476238484:web:f214ed67d25cdb30178881',
    measurementId: 'G-05Z9EBZ84Z',
});

const db = getFirestore(firebaseApp);

const collectionName = 'ein-shams.web.app';
export const einshamsCollection = collection(db, collectionName);

export const getAllFirebaseActions = async () => {
    const snapshot = await getDocs(collection(db, collectionName));
    let actions: FirebaseAction[] = [];
    snapshot.forEach((doc) => {
        actions.push({
            id: doc.id,
            action: doc.data().action, // gotoPage, readMsg, choose
            value: doc.data().value,
            date: doc.data().date,
            seconds: doc.data().date?.seconds,
            deviceInfo: doc.data().deviceInfo,
        });
    });
    actions.sort((a, b) => (b.seconds ?? 0) - (a.seconds ?? 0));
    return actions;
};

export const addFirebaseAction = async (action: FirebaseAction) => {
    console.log('addFirebaseAction:');
    console.table(action);
    const docRef = await addDoc(collection(db, collectionName), {
        date: serverTimestamp(),
        ...action,
    });

    return docRef;
};

export const delAllFirebaseAction = async ({
    deviceId,
    deviceIp,
}: {
    deviceId?: string;
    deviceIp?: string;
}) => {
    const actions = await getAllFirebaseActions();
    try {
        let count = 0;
        for (const action of actions)
            if (
                (deviceIp && action.deviceInfo.ip == deviceIp) ||
                (deviceId && action.deviceInfo.deviceId == deviceId) ||
                !(deviceIp || deviceId)
            ) {
                console.log('deleting', action);
                await deleteDoc(doc(db, collectionName, action.id || ''));
                count++;
            }

        console.log(
            'deleted all actions by:',
            `${deviceIp ?? ''} ${deviceId ?? ''}`.trim() || 'all',
            'count:',
            count
        );
        return true;
    } catch (error) {
        return false;
    }
};
