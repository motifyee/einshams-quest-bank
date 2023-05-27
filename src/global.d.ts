type ReturnTypes<U> = U extends () => any ? ReturnType<U> : never;

type QTypes =
    | 'MULTICHOICE_Q'
    | 'TRUEORFALSE_Q'
    | 'VALUE_Q'
    | 'MATCHING_Q'
    | 'MULTICHOICE_QG'
    | 'TRUEORFALSE_QG'
    | 'VALUE_QG'
    | 'MATCHING_QG'
    | 'TEST'
    | 'ANSWER'
    | 'ANSWERGROUP'
    | 'SAVEDANSWER'
    | 'SCORE'
    | 'SUBJECT'
    | 'SUBJECTS';

type QBase = {
    id: string;
    questionText?: string;

    type: QTypes;

    image?: string;
    imageAlt?: string;

    countable: () => boolean;

    answer?: Answer;
    answerGroup?: AnswerGroup;
    selectAnswer: (string) => QBase;

    // properties
    isCorrect: () => boolean; // is correct
    selectedId: () => string;
    providedAnswer?: string;
};

type Shuffleable = {
    shuffle?: boolean;
    shuffled: (boolean) => Shuffleable;
    cache: Shuffleable;
};

interface QGBase extends Shuffleable {
    id: string;
    image?: string;
    imageAlt?: string;
    title?: string;
    type: QTypes;
    countablesCount: () => number; // counts as correct
    correctAnswersCount: () => number; // which are answerd correctly
    selectAnswer: (string, string) => QGBase;
    unselectAll: () => QGBase;
}

interface MultiChoiceQ extends QBase {
    type: 'MULTICHOICE_Q';
    // answers: Answer[];
}

interface MultiChoiceQG extends QGBase {
    type: 'MULTICHOICE_QG';
    questions: MultiChoiceQ[];
}

interface TrueOrFalseQ extends QBase {
    type: 'TRUEORFALSE_Q';
    // answer: boolean;
}

interface TrueOrFalseQG extends QGBase {
    type: 'TRUEORFALSE_QG';
    questions: TrueOrFalseQ[];
}

interface ValueQ extends QBase {
    // for answers that are a number or a sm to md string
    type: 'VALUE_Q';
    // answer: string;
}

interface ValueQG extends QGBase {
    type: 'VALUE_QG';
    questions: ValueQ[];
}

interface MatchingQ extends QBase {
    type: 'MATCHING_Q';
    // answer?: Answer;
    // answers?: Answer[];
}

interface MatchingQG extends QGBase {
    type: 'MATCHING_QG';
    questions: MatchingQ[];
}

type Question = MultiChoiceQ | MatchingQ | TrueOrFalseQ | ValueQ;

type QuestionGroup = MultiChoiceQG | MatchingQG | TrueOrFalseQG | ValueQG;

interface Test extends Shuffleable {
    id: string;
    title: string;
    questionGroups: QuestionGroup[];
    correctAnswersCount: () => number;
    countables: () => number;
    selectAnswer: (string, string, string) => Test;
    unselectAll: () => Test;
}

type Answer = {
    id: string;
    value: string | number | boolean;
    correct?: boolean; // this is the correct answer, should be selected
    selected?: boolean;
    image?: string;
    imageAlt?: string;
};
// mutli choice question
// value
// true or false
// matching
type AnswerGroup = {
    id: string;
    answers: Answer[];
    // ic?: boolean; // is correctly answered by the user
    get isCorrect(): boolean; // is correct
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

type Subject = {
    id: string;
    name: string;
    teacher: string;
    tests: Test[];
    scores?: Score[];
};
type Subjects = Subject[];

type Settings = {
    subject: string;
    testId: string;
    test?: Test;

    unblurredQuestion: string;

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
