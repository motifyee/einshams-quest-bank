import { useEffect, useState } from 'react';

let saved: any = localStorage.getItem('settings');
saved = !!saved ? (JSON.parse(saved) as Settings) : null;

const _default: Settings = saved || {
    subject: '',
    testId: '',
    test: undefined,
    unblurredQuestion: '',

    sidebarOn: false,

    testModeOn: false,
    correctAnswers: false,

    shuffleQuestions: false,
    shuffleAnswers: false,
    blurAnswers: false,
};

export default function useSettings() {
    const [settings, setSettings] = useState<Settings>(_default);

    useEffect(() => {
        localStorage.setItem('settings', JSON.stringify(settings));
    }, [settings]);

    return [settings, setSettings] as const;
}

export const defaultSettings: Settings = _default;
