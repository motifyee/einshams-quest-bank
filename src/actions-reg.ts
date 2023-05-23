import { v4 as uuid } from 'uuid';
import DeviceDetector from 'device-detector-js';
import {
    getAllFirebaseActions,
    addFirebaseAction,
    delAllFirebaseAction,
} from './firebase.js';

let user: string = getUser();
if (!localStorage.getItem('install-date'))
    localStorage.setItem('install-date', new Date().toISOString());

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

export async function saveAction(action?: string, value?: string) {
    if (user == 'admin') return;
    console.log('saveAction', action, value);
    let res = await addFirebaseAction({
        action: action || 'DEFAULT',
        value: value || '',
        deviceInfo: await deviceInfo(),
    });
    console.log('saveAction', res);
    return res;
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
