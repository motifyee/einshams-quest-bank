type ReturnTypes<U> = U extends () => any ? ReturnType<U> : never;

type MultiSelectQuestion = {
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
    countsAsCorrect?: boolean;
    correct?: boolean;
};

type MatchingQuestions = {
    id: string;
    items: MatchingQuestion[];
    itemsCount?: number;
    correctAnswers?: number;
    image?: string;
    imageAlt?: string;
};

type Question = MultiSelectQuestion | MatchingQuestions;

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
    [name: string]: MultiSelectQuestion[];
    // questions: Question[];
    // scores?: Score[];
};

type Settings = {
    subject: string;
    questions?: MultiSelectQuestion[];

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
