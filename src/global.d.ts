type ReturnTypes<U> = U extends () => any ? ReturnType<U> : never;

type Question = {
    id: string;
    questionText: string;
    answers: Answer[];
    correct?: boolean;
    selectedId?: string;
    correctAnswers?: number;
    image?: string;
    imageAlt?: string;
};

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
    [name: string]: Question[];
    // questions: Question[];
    // scores?: Score[];
};

type Settings = {
    subject: string;
    questions?: Question[];

    unbluredQuestion: string;

    sidebarOn: boolean;

    testModeOn: boolean;
    correctAnswers: boolean;

    shuffleQuestions: boolean;
    shuffleAnswers: boolean;
    blurAnswers: boolean;
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
