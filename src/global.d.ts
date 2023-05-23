type ReturnTypes<U> = U extends () => any ? ReturnType<U> : never;

type SelectionQuestion = {
    id: string;
    questionText: string;
    answers: Answer[];
    correct?: boolean;
    selectedId?: string;
    correctAnswers?: number;
    image?: string;
    imageAlt?: string;
};

type MatchingQuestion = {
    id: string;
    questionText?: string;
    answer?: Answer;
    answers?: Answer[];
    image?: string;
    imageAlt?: string;

    selectedId?: string;
    countsAsCorrect: boolean;
    correct?: boolean;
};

type MatchingQuestions = {
    id: string;
    image?: string;
    imageAlt?: string;
    questions: MatchingQuestion[];

    questionsCount?: number;
    correctAnswersCount?: number;
};

type Question = SelectionQuestion | MatchingQuestions;

type Questions = {
    questions: Question[];
    get correctAnswers(): number;
};

type Answer = {
    id: string;
    text: string;
    correct?: boolean;
    selected?: boolean;
    image?: string;
    imageAlt?: string;
};

type SavedAnswer = {
    questId: string;
    answerId: string;
};

type Score = {
    id: string;
    date: string;
    subject: string;
    savedAnswer: SavedAnswer[];
    correctAnswers: number;
    totalQuestions: number;
    percentage: number;
};

type Subjects = {
    [name: string]: SelectionQuestion[];
    // questions: Question[];
    // scores?: Score[];
};

type Settings = {
    subject: string;
    questions?: SelectionQuestion[];

    unbluredQuestion: string;

    sidebarOn: boolean;

    testModeOn: boolean;
    correctAnswers: boolean;

    shuffleQuestions: boolean;
    shuffleAnswers: boolean;
    blurAnswers: boolean;
};

type FirebaseAction = {
    id?: string;
    action: string;
    value: string;
    date?: string;
    seconds?: number;
    deviceInfo: DeviceInfo;
};
type DeviceInfo = {
    detector: DeviceDetector.DeviceDetectorResult;
    screen: Partial<ScreenInfo>;
    ip: string;
    deviceId: string;
};
type ScreenInfo = {
    width: number;
    height: number;
    availWidth: number;
    availHeight: number;
    colorDepth: number;
    pixelDepth: number;
    orientation: {
        angle: number;
        type: string;
    };
};
// import React from 'react';

// declare module 'react' {
//     // augment CSSProperties here
//     interface CSSProperties {
//         '--active-bg': string | number;
//         '--active-border': string | number;
//         'pointer-events': string | number;
//     }
// }
