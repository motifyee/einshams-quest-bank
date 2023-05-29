import { createAction } from '@reduxjs/toolkit';
import { ReducerWithoutAction } from 'react';
// import Question from './components/Question';

// ############################### Questions ###############################
const l = console.log;
export const addQuestion = createAction(
    'questions/add',
    (question: QuestionGroup) => ({
        payload: { question },
    })
);
// export const removeQuestion = createAction<string>('remove');
export const removeQuestion = createAction(
    'questions/remove',
    (questionId: string) => ({
        payload: { questionId },
    })
);
export const updateQuestion = createAction(
    'questions/update',
    (questionId: string, properties: Partial<QuestionGroup>) => ({
        payload: { questionId, ...properties },
    })
);
export const setTest = createAction(
    'questions/set',
    (test?: Test, shuffle?: boolean) => ({
        payload: { test, shuffle },
    })
);

export const shuffleTest = createAction(
    'questions/shuffle',
    (shuffle: boolean) => ({
        payload: { shuffle },
    })
);

// ############################### Answers ###############################

/*
    export const addAnswer = createAction<{ id: string; answer: Answer }>(
        'questions/answers/add'
    );
    export const removeAnswer = createAction<{
        questionId: string;
        answerId: string;
    }>('questions/answers/remove');

    export const updateAnswer = createAction<{
        questionId: string;
        answerId: string;
        answer: Answer;
    }>('questions/answers/update');

    export const selectCorrectAnswer = createAction<{
        questionId: string;
        answerId: string;
    }>('questions/answers/selectCorrect');

    export const unselectCorrectAnswer = createAction<{
        questionId: string;
    }>('questions/answers/unselectCorrect');

    export const selectAllCorrectAnswers = createAction(
        'questions/answers/selectAllCorrect'
    );

    export const unselectAllCorrectAnswers = createAction<{
        questionId: string;
    }>('questions/answers/unselectAllCorrect');

 */

export const selectAnswer = createAction(
    'questions/answers/selectOne',
    (qgId: string, questionId: string, answerId: string) => ({
        payload: { qgId, questionId, answerId },
    })
);

export const setAnswer = createAction(
    'questions/answers/setOne',
    (qgId: string, qId: string, answer: Answer) => ({
        payload: { qgId, qId, answer },
    })
);

export const unselectAnswer = createAction(
    'questions/answers/unselectOne',
    (qgId: string, qId: string) => ({
        payload: { qgId, qId },
    })
);

export const unselectAllQuestionsAnswers = createAction(
    'questions/answers/unselectAll'
);

export const shuffleAnswers = createAction(
    'questions/answers/shuffleOne',
    (questionId: string, question: MultiChoiceQ, shuffle: boolean) => ({
        payload: { questionId, question, shuffle },
    })
);

export const shuffleAllQuestionsAnswers = createAction(
    'questions/answers/shuffleAll',
    (questions: MultiChoiceQ[], shuffle: boolean) => ({
        payload: { questions, shuffle },
    })
);

// ############################### useQuestions ###############################

export type Action =
    | ReturnType<typeof addQuestion>
    | ReturnType<typeof removeQuestion>
    | ReturnType<typeof updateQuestion>
    | ReturnType<typeof setTest>
    | ReturnType<typeof shuffleTest>
    | ReturnType<typeof selectAnswer>
    | ReturnType<typeof setAnswer>
    | ReturnType<typeof unselectAnswer>
    | ReturnType<typeof unselectAllQuestionsAnswers>;
// | ReturnType<typeof shuffleAnswers>;

// ############################### Reducer ###############################

export const reducer = (state: Test, action: Action): Test => {
    if (action.type === addQuestion.type)
        return {
            ...state,
            qg: [...state.qg, action.payload.question],
        };

    if (action.type === removeQuestion.type)
        return {
            ...state,
            qg: state.qg.filter(
                (question) => question.id !== action.payload.questionId
            ),
        };

    if (action.type === updateQuestion.type)
        return {
            ...state,
            ...state.qg.map((question) =>
                question.id === action.payload.questionId
                    ? { ...question, ...action.payload }
                    : question
            ),
        };

    if (action.type === setTest.type) {
        const { shuffle, test } = action.payload;
        // console.log('setTest', test);
        return test?.shuffled(shuffle) as Test;
    }

    if (action.type === shuffleTest.type) {
        const { shuffle } = action.payload;
        // console.log('shuffleTest', shuffle);
        return state.shuffled(shuffle) as Test;
    }

    if (action.type === selectAnswer.type)
        return state.selectAnswer(
            action.payload.qgId,
            action.payload.questionId,
            action.payload.answerId
        ) as Test;

    if (action.type === setAnswer.type)
        return state.setAnswer(
            action.payload.qgId,
            action.payload.qId,
            action.payload.answer
        ) as Test;

    if (action.type === unselectAllQuestionsAnswers.type)
        return state.unselectAll() as Test;

    if (action.type === unselectAnswer.type)
        return state.unselectAnswer(
            action.payload.qgId,
            action.payload.qId
        ) as Test;

    return { ...state };
};
