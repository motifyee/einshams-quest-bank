type ReturnTypes<U> = U extends () => any ? ReturnType<U> : never;

type QT =
    | 'MULTICHOICEQUESTION'
    | 'TRUEORFALSEQUESTION'
    | 'VALUEQUESTION'
    | 'MATCHINGQUESTION'
    | 'MULTICHOICEQUESTIONGROUP'
    | 'TRUEORFALSEQUESTIONGROUP'
    | 'VALUEQUESTIONGROUP'
    | 'MATCHINGQUESTIONGROUP'
    | 'TEST'
    | 'ANSWER'
    | 'ANSWERGROUP'
    | 'SAVEDANSWER'
    | 'SCORE'
    | 'SUBJECT'
    | 'SUBJECTS';

type QuestionBase = {
    id: string;
    questionText: string;

    type: QT;

    image?: string;
    imageAlt?: string;

    countable: boolean;

    // properties
    isCorrect?: boolean;
    selectedId?: string;
    providedAnswer?: string;
};

type Shuffleable = {
    shuffle?: boolean;
    shuffled?: QuestionGroup[];
};

interface QuestionGroupBase extends Shuffleable {
    id: string;
    image?: string;
    imageAlt?: string;
    title?: string;
    type: QT;
    countable: number; // counts as correct
    correctAnswersCount: number; // which are answerd correctly
}

interface MultiChoiceQuestion extends QuestionBase {
    type: 'MULTICHOICEQUESTION';
    answers: Answer[];
}

interface MultiChoiceQuestionGroup extends QuestionGroupBase {
    type: 'MULTICHOICEQUESTIONGROUP';
    questions: MultiChoiceQuestion[];
}

interface TrueOrFalseQuestion extends QuestionBase {
    type: 'TRUEORFALSEQUESTION';
    answer: boolean;
}

interface TrueOrFalseQuestionGroup extends QuestionGroupBase {
    type: 'TRUEORFALSEQUESTIONGROUP';
    questions: TrueOrFalseQuestion[];
}

interface ValueQuestion extends QuestionBase {
    // for answers that are a number or a sm to md string
    type: 'VALUEQUESTION';
    answer: string;
}

interface ValueQuestionGroup extends QuestionGroupBase {
    type: 'VALUEQUESTIONGROUP';
    questions: ValueQuestion[];
}

interface MatchingQuestion extends QuestionBase {
    type: 'MATCHINGQUESTION';
    answer?: Answer;
    answers?: Answer[];
}

interface MatchingQuestionGroup extends QuestionGroupBase {
    type: 'MATCHINGQUESTIONGROUP';
    questions: MatchingQuestion[];
}

type QuestionGroup =
    | MultiChoiceQuestionGroup
    | MatchingQuestionGroup
    | TrueOrFalseQuestionGroup
    | ValueQuestionGroup;

interface Test extends Shuffleable {
    id: string;
    title: string;
    questions: QuestionGroup[];
    get correctAnswers(): number;
    get countable(): number;
}

type Answer = {
    id: string;
    text: string;
    isCorrect?: boolean;
    selected?: boolean;
    image?: string;
    imageAlt?: string;
};

type AnswerGroup = {
    id: string;
    answers: Answer[];
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
    testIdx: number;
    test?: Test;

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
