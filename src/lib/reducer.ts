import { createAction } from '@reduxjs/toolkit';
import { ReducerWithoutAction } from 'react';
// import Question from './components/Question';

// ############################### Questions ###############################

export const addQuestion = createAction(
    'questions/add',
    (question: Question) => ({ payload: { question } })
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
    (questionId: string, properties: Partial<Question>) => ({
        payload: { questionId, ...properties },
    })
);
export const setQuestions = createAction(
    'questions/set',
    (questions: Question[], shuffle: boolean) => ({
        payload: { questions, shuffle },
    })
);

export const shuffleQuestions = createAction(
    'questions/shuffle',
    (questions: Question[], shuffle: boolean) => ({
        payload: { questions, shuffle },
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
    (questionId: string, answerId: string) => ({
        payload: { questionId, answerId },
    })
);

export const unselectAnswer = createAction(
    'questions/answers/unselectOne',
    (questionId: string) => ({
        payload: { questionId },
    })
);

export const unselectAllQuestionsAnswers = createAction(
    'questions/answers/unselectAll'
);

export const shuffleAnswers = createAction(
    'questions/answers/shuffleOne',
    (questionId: string, question: Question, shuffle: boolean) => ({
        payload: { questionId, question, shuffle },
    })
);

export const shuffleAllQuestionsAnswers = createAction(
    'questions/answers/shuffleAll',
    (questions: Question[], shuffle: boolean) => ({
        payload: { questions, shuffle },
    })
);

// ############################### useQuestions ###############################

export type Action =
    | ReturnType<typeof addQuestion>
    | ReturnType<typeof removeQuestion>
    | ReturnType<typeof updateQuestion>
    | ReturnType<typeof setQuestions>
    | ReturnType<typeof shuffleQuestions>
    | ReturnType<typeof selectAnswer>
    | ReturnType<typeof unselectAnswer>
    | ReturnType<typeof unselectAllQuestionsAnswers>
    | ReturnType<typeof shuffleAnswers>;

// ############################### Reducer ###############################

export const reducer = (state: Question[], action: Action): Question[] => {
    if (action.type === addQuestion.type)
        return [...state, action.payload.question];

    if (action.type === removeQuestion.type)
        return state.filter(
            (question) => question.id !== action.payload.questionId
        );

    if (action.type === updateQuestion.type)
        return state.map((question) => {
            if (question.id === action.payload.questionId) {
                return { ...question, ...action.payload };
            }
            return question;
        });

    if (action.type === setQuestions.type) {
        const { shuffle, questions } = action.payload;
        if (!shuffle) return [...questions];
        return [...questions].sort(() => Math.random() - 0.5);
    }

    if (action.type === shuffleQuestions.type) {
        const { shuffle, questions } = action.payload;
        if (!shuffle) {
            const mappedstate: { [id: string]: Answer[] } = state.reduce(
                (p, c) => ({ ...p, [c.id]: c.answers }),
                {}
            );
            return questions.map((e) => ({ ...e, answers: mappedstate[e.id] }));
        }
        return [...state].sort(() => Math.random() - 0.5);
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
        return state.map((question) => {
            if (question.id === action.payload.questionId) {
                return {
                    ...question,
                    correct: question.answers.some(
                        (answer) =>
                            answer.correct &&
                            answer.id === action.payload.answerId
                    ),
                    selectedId: action.payload.answerId,
                    answers: question.answers.map((answer, _) => {
                        return {
                            ...answer,
                            selected: answer.id === action.payload.answerId,
                        };
                    }),
                };
            }
            return question;
        });

    if (action.type === unselectAnswer.type)
        return state.map((question) =>
            question.id === action?.payload?.questionId
                ? {
                      ...question,
                      answers: question.answers.map((answer, index) => ({
                          ...answer,
                          selected: false,
                      })),
                  }
                : question
        );

    if (action.type === unselectAllQuestionsAnswers.type)
        return state.map((question) => ({
            ...question,
            selectedId: undefined,
            correct: undefined,
            answers: question.answers.map((answer) => ({
                ...answer,
                selected: false,
            })),
        }));

    if (action.type === shuffleAnswers.type) {
        let { questionId, question, shuffle } = action.payload;
        if (!shuffle)
            return state.map((q) => (q.id === questionId ? question : q));
        return state.map((q) => {
            if (q.id === questionId) {
                const shuffledAnswers = [...q.answers];
                for (let i = shuffledAnswers.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [shuffledAnswers[i], shuffledAnswers[j]] = [
                        shuffledAnswers[j],
                        shuffledAnswers[i],
                    ];
                }
                return {
                    ...q,
                    answers: shuffledAnswers,
                };
            }
            return q;
        });
    }

    return [] as Question[];
};
