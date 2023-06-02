/**
 * @shorthands:
 * q:   Question
 * qg:  QuestionGroup
 * a:   Answer
 * ag:  AnswerGroup
 * al:  AnswerList
 * t:   Test
 * s:   Subject
 * sg:  SubjectGroup
 */

type ReturnTypes<U> = U extends () => any ? ReturnType<U> : never;

type QTypes =
    | 'QUESTION' // question
    | 'MULTICHOICE_Q' // mcq
    | 'TRUEORFALSE_Q' // tofq
    | 'VALUE_Q' // vq
    | 'MATCHING_Q' // mq
    | 'MULTICHOICE_QG' // mcqg
    | 'TRUEORFALSE_QG' // tofqg
    | 'VALUE_QG' // vqg
    | 'MATCHING_QG' // mqg
    | 'TEST' // test
    | 'SCORE' // score
    | 'SUBJECT' // subject
    | 'SUBJECTS'; // subjects

type ATypes =
    | 'ANSWER' // Answer
    | 'ANSERGROUP' // ag
    | 'SAVED_A' // sa
    | 'MULTICHOICE_A' // mca
    | 'TRUEORFALSE_A' // tofa
    | 'VALUE_A' // va
    | 'MATCHING_A'; // ma

type QBase = {
    id: string;
    questionText?: string;

    type: QTypes;

    image?: string;
    imageAlt?: string;

    countable: () => boolean;

    // answer?: Answer; //
    answerValue?: string | boolean | number;
    ag: AnswerGroup; // mcq, tofq, vq, mq
    selectAnswer: (string) => QBase;
    addAnswer: (Answer) => QBase;
    unselectAnswer: () => QBase;

    // properties
    isCorrect: () => boolean; // is correct
    selectedId: () => string;
    correctId: () => string;
};

type Shuffleable = {
    shuffle?: boolean;
    shuffled: (boolean) => Shuffleable;
    cache: Shuffleable; // cache of the original qg
};

interface QGBase extends Shuffleable {
    id: string;
    image?: string;
    imageAlt?: string;
    title?: string;
    type: QTypes;
    questionIds: string[];
    countablesCount: () => number; // counts as correct
    correctAnswersCount: () => number; // which are answerd correctly
    selectAnswer: (string, string) => QGBase;
    setAnswer: (string, Answer) => QGBase;
    unselectAll: () => QGBase;
    unselectAnswer: (qId: string) => QGBase;
    selectingId: (ansId: string) => string;
}

interface MultiChoiceQ extends QBase {
    type: 'MULTICHOICE_Q';
    // answers: Answer[];
}

interface MultiChoiceQG extends QGBase {
    type: 'MULTICHOICE_QG';
    questions?: MultiChoiceQ[];
}

interface TrueOrFalseQ extends QBase {
    type: 'TRUEORFALSE_Q';
    // answer: boolean;
}

interface TrueOrFalseQG extends QGBase {
    type: 'TRUEORFALSE_QG';
    questions?: TrueOrFalseQ[];
}

interface ValueQ extends QBase {
    // for answers that are a number or a sm to md string
    type: 'VALUE_Q';
    // answer: string;
}

interface ValueQG extends QGBase {
    type: 'VALUE_QG';
    questions?: ValueQ[];
}

interface MatchingQ extends QBase {
    type: 'MATCHING_Q';
    // answer?: Answer;
    // answers?: Answer[];
}

interface MatchingQG extends QGBase {
    type: 'MATCHING_QG';
    questions?: MatchingQ[];
}

type Question = MultiChoiceQ | MatchingQ | TrueOrFalseQ | ValueQ;

type QuestionGroup = MultiChoiceQG | MatchingQG | TrueOrFalseQG | ValueQG;

interface Test extends Shuffleable {
    id: string;
    title: string;
    qgs?: QuestionGroup[];
    qgIds: string[];
    correctAnswersCount: () => number;
    countables: () => number;
    selectAnswer: (string, string, string) => Test;
    setAnswer: (string, string, Answer) => Test;
    unselectAll: () => Test;
    unselectAnswer: (qgId: string, qId: string) => Test;
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
    // get isCorrect(): boolean; // is correct
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
