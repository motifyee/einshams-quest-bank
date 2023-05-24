import { createAction } from '@reduxjs/toolkit';
import { ReducerWithoutAction } from 'react';
// import Question from './components/Question';

// ############################### Questions ###############################
const l = console.log;
export const addQuestion = createAction(
    'questions/add',
    (question: QuestionGroup) => ({ payload: { question } })
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

export const unselectAnswer = createAction(
    'questions/answers/unselectOne',
    (qgId: string, questionId: string) => ({
        payload: { qgId, questionId },
    })
);

export const unselectAllQuestionsAnswers = createAction(
    'questions/answers/unselectAll'
);

export const shuffleAnswers = createAction(
    'questions/answers/shuffleOne',
    (questionId: string, question: MultiChoiceQuestion, shuffle: boolean) => ({
        payload: { questionId, question, shuffle },
    })
);

export const shuffleAllQuestionsAnswers = createAction(
    'questions/answers/shuffleAll',
    (questions: MultiChoiceQuestion[], shuffle: boolean) => ({
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
    | ReturnType<typeof unselectAnswer>
    | ReturnType<typeof unselectAllQuestionsAnswers>;
// | ReturnType<typeof shuffleAnswers>;

// ############################### Reducer ###############################

export const reducer = (state: Test, action: Action): Test => {
    if (action.type === addQuestion.type)
        return {
            ...state,
            questionGroups: [...state.questionGroups, action.payload.question],
        };

    if (action.type === removeQuestion.type)
        return {
            ...state,
            questionGroups: state.questionGroups.filter(
                (question) => question.id !== action.payload.questionId
            ),
        };

    if (action.type === updateQuestion.type)
        return {
            ...state,
            ...state.questionGroups.map((question) =>
                question.id === action.payload.questionId
                    ? { ...question, ...action.payload }
                    : question
            ),
        };

    if (action.type === setTest.type) {
        const { shuffle, test } = action.payload;
        console.log('setTest', test);
        return {
            ...test,
            shuffle,
            shuffled: shuffle
                ? test?.questionGroups.map((e) => ({ ...e, shuffle }))
                : // ? [...test.questions].sort(() => Math.random() - 0.5)
                  undefined,
        } as Test;
    }

    if (action.type === shuffleTest.type) {
        const { shuffle } = action.payload;
        return {
            ...state,
            shuffle,
            shuffled: shuffle
                ? state.questionGroups.map((e) => ({ ...e, shuffle }))
                : undefined,
        };
        // if (!shuffle) {
        //     const mappedstate: { [id: string]: Answer[] } = state.reduce(
        //         (p, c) => ({ ...p, [c.id]: c.answers }),
        //         {}
        //     );
        //     return questions.map((e) => ({ ...e, answers: mappedstate[e.id] }));
        // }
        // return [...state].sort(() => Math.random() - 0.5);

        // const shuffledQuestions = [...state];
        // for (let i = shuffledQuestions.length - 1; i > 0; i--) {
        //     const j = Math.floor(Math.random() * (i + 1));
        //     [shuffledQuestions[i], shuffledQuestions[j]] = [
        //         shuffledQuestions[j],
        //         shuffledQuestions[i],
        //     ];
        // }
        // return shuffledQuestions;

        // return state.sort(() => Math.random() - 0.5);
    }

    if (action.type === selectAnswer.type)
        return {
            ...state,
            questionGroups: state.questionGroups.map((qg) =>
                qg.id === action.payload.qgId
                    ? {
                          ...qg,
                          questions: qg.questions.map((question) =>
                              question.id === action.payload.questionId
                                  ? {
                                        ...question,
                                        selectedId: action.payload.answerId,
                                        answers: question.answers?.map(
                                            (answer) => {
                                                return {
                                                    ...answer,
                                                    selected:
                                                        answer.id ===
                                                        action.payload.answerId,
                                                };
                                            }
                                        ),
                                    }
                                  : question
                          ),
                      }
                    : qg
            ),
        } as Test;

    // return state.map((question) =>
    //     question.id === action?.payload?.questionId
    //         ? {
    //               ...question,
    //               answers: question.answers.map((answer, index) => ({
    //                   ...answer,
    //                   selected: false,
    //               })),
    //           }
    //         : question
    // );

    if (action.type === unselectAllQuestionsAnswers.type)
        return {
            ...state,
            questionGroups: state.questionGroups.map((qg) => ({
                ...qg,
                questions: qg.questions.map((question) => ({
                    ...question,
                    selectedId: undefined,
                })),
            })),
        } as Test;
    // return state.map((question) => ({
    //     ...question,
    //     selectedId: undefined,
    //     correct: undefined,
    //     answers: question.answers.map((answer) => ({
    //         ...answer,
    //         selected: false,
    //     })),
    // }));

    // if (action.type === shuffleAnswers.type) {
    //     let { questionId, question, shuffle } = action.payload;
    //     if (!shuffle)
    //         return state.map((q) => (q.id === questionId ? question : q));
    //     return state.map((q) => {
    //         if (q.id === questionId) {
    //             const shuffledAnswers = [...q.answers];
    //             for (let i = shuffledAnswers.length - 1; i > 0; i--) {
    //                 const j = Math.floor(Math.random() * (i + 1));
    //                 [shuffledAnswers[i], shuffledAnswers[j]] = [
    //                     shuffledAnswers[j],
    //                     shuffledAnswers[i],
    //                 ];
    //             }
    //             return {
    //                 ...q,
    //                 answers: shuffledAnswers,
    //             };
    //         }
    //         return q;
    //     });
    // }

    return state;
};
