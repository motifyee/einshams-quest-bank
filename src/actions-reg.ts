import { v4 as uuid } from 'uuid';
import DeviceDetector from 'device-detector-js';
import {
    getAllFirebaseActions,
    addFirebaseAction,
    delAllFirebaseAction,
} from './firebase.js';

let user: string = getUser();

if (!localStorage.getItem('install-date' /* uploaded */))
    if (!localStorage.getItem('install-date*' /* not uploaded yet */))
        localStorage.setItem('install-date*', new Date().toISOString());

function setUser() {
    let _user = prompt('Enter a user name', getUser());
    if (!_user) return;

    localStorage.setItem('user', _user);
    user = _user;
}

function getUser(): string {
    return localStorage.getItem('user') || '';
}

async function getIP(): Promise<string> {
    return await fetch('https://api.ipify.org').then((res) => res.text());
}

export async function delMyIpLogs() {
    return delAllFirebaseAction({ deviceIp: await getIP() });
}

export async function delMyIdLogs() {
    return delAllFirebaseAction({ deviceId: deviceUUID() });
}

function delKey(key: string) {
    localStorage.removeItem(key);
}

function getKeys(
    initial: string
): { key: string; idx: number; value: string }[] {
    return Object.keys(localStorage)
        .filter((key) => key.startsWith(`${initial}-`))
        .map((key) => ({
            key,
            idx: Number(key.replace(`${initial}-`, '')),
            value: localStorage.getItem(key) || '',
        }));
}

function saveToKeys(
    initial: string,
    value?: string
): { key: string; idx: number; value: string }[] {
    const keys = getKeys(initial);
    let idx = keys.reduce((max, { idx }) => Math.max(max, idx), 0) + 1;
    localStorage.setItem(`${initial}-${idx}`, value || '');
    keys.push({ key: `${initial}-${idx}`, idx, value: value || '' });
    return keys;
}

export async function saveAction(action?: string, value?: string) {
    if (user == 'admin') return;
    action = action || 'DEFAULT';
    value = value || new Date().toISOString();

    let actions = saveToKeys(action, value);
    for (let act of actions) {
        try {
            await addFirebaseAction({
                action: act.key,
                value: act.value,
                deviceInfo: await deviceInfo(),
            });
            delKey(act.key);
        } catch (error) {}
    }
    let installDate = localStorage.getItem(
        'install-date*' /* not uploaded yet */
    );
    if (installDate) {
        try {
            await addFirebaseAction({
                action: 'install-date',
                value: installDate,
                deviceInfo: await deviceInfo(),
            });
            localStorage.setItem('install-date', installDate);
            localStorage.removeItem('install-date*' /* not uploaded yet */);
        } catch (error) {}
    }
}

function screenInfo() {
    return {
        width: window.screen.width,
        height: window.screen.height,
        availWidth: window.screen.availWidth,
        availHeight: window.screen.availHeight,
        colorDepth: window.screen.colorDepth,
        pixelDepth: window.screen.pixelDepth,
        orientation: {
            angle: window.screen.orientation.angle,
            type: window.screen.orientation.type,
        },
    };
}
async function deviceInfo(): Promise<DeviceInfo> {
    let detector = new DeviceDetector().parse(navigator.userAgent);
    let screen = screenInfo();
    let ip = await getIP();
    let deviceId = deviceUUID();

    return {
        ip,
        screen,
        detector,
        deviceId,
    };
}

function deviceUUID(): string {
    let machineId = localStorage.getItem('machineId');
    if (!machineId) {
        machineId = uuid();
        localStorage.setItem('machineId', machineId);
    }
    return machineId;
}

function _uuid() {
    let navigator_info = window.navigator;
    let screen_info = window.screen;

    let uid: string = navigator_info.mimeTypes.length.toString();
    uid += navigator_info.userAgent.replace(/\D+/g, '');
    uid += navigator_info.plugins.length;
    uid += screen_info.height || '';
    uid += screen_info.width || '';
    uid += screen_info.pixelDepth || '';
    return uid.toString();
}
