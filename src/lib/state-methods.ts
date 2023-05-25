// ######################################## Question ########################################

import { useMemo } from 'react';

export function questionSelecedAnswerId(this: Question): string {
    return (
        this.answerGroup?.answers?.find((answer) => answer.selected)?.id ?? ''
    );
}

export function questionIsCorrect(this: Question): boolean {
    return (
        this.answerGroup?.answers?.some(
            (answer) => answer.correct && answer.selected
        ) ?? false
    );
}

export function questionIsAnswered(this: Question): boolean {
    return (
        this.answerGroup?.answers?.some((answer) => answer.selected) ?? false
    );
}

export function questionIsCountable(this: Question): boolean {
    return (
        !!this.questionText &&
        (!!this.answerGroup?.answers?.length || !!this.answer?.value)
    );
}

export function questionSelectAnswer(
    this: Question,
    answerId: string
): Question {
    return {
        ...this,
        answerGroup: {
            ...this.answerGroup,
            answers: this.answerGroup?.answers?.map((answer) => ({
                ...answer,
                selected: answer.id === answerId,
            })),
        },
    } as Question;
}

// ######################################## QuestionGroup ########################################

export function questionGroupCorrectAnswersCount(this: QuestionGroup): number {
    return (this.questions as Question[]).filter((q) => q.isCorrect()).length;
}

export function questionGroupCountablesCount(this: QuestionGroup): number {
    return (this.questions as Question[]).filter((q) => q.countable()).length;
}

export function questionGroupShuffleQuestions(
    this: QuestionGroup,
    shuffle: boolean
): QuestionGroup {
    const answers: any = {};
    this.questions.forEach(
        (question) => (answers[question.id] = question.selectedId())
    );
    const ans = (q: Question) => q.selectAnswer(answers[q.id]);
    const rand = () => Math.random() - 0.5;

    let questions = [...(this.cache as QuestionGroup).questions].map(ans);
    if (shuffle) questions = questions.sort(rand);

    return {
        ...this,
        shuffle,
        questions,
    } as QuestionGroup;
}

export function questionGroupSelectAnswer(
    this: QuestionGroup,
    questionId: string,
    answerId: string
): QuestionGroup {
    // console.log('questionGroupSelectAnswer', questionId, answerId, this.)
    return {
        ...this,
        questions: this.questions.map((question) =>
            question.id === questionId
                ? question.selectAnswer(answerId)
                : question
        ),
        // shuffledCache: {
        //     questions: this.questions.map((question) =>
        //         question.id === questionId
        //             ? question.selectAnswer(answerId)
        //             : question
        //     ),
        // } as QuestionGroup,
    } as QuestionGroup;
}

export function questionGroupUnselectAll(this: QuestionGroup) {
    return {
        ...this,
        questions: this.questions.map((question) => question.selectAnswer('')),
    } as QuestionGroup;
}

// ######################################## Test ########################################

export function testCorrectAnswersCount(this: Test): number {
    return this.questionGroups.reduce(
        (acc, questionGroup) => acc + questionGroup.correctAnswersCount(),
        0
    );
}

export function testCountablesCount(this: Test): number {
    return this.questionGroups.reduce(
        (acc, questionGroup) => acc + questionGroup.countablesCount(),
        0
    );
}

export function testShuffleQuestions(this: Test, shuffle: boolean): Test {
    // console.log('testShuffleQuestions');
    return {
        ...this,
        shuffle: shuffle,
        questionGroups: this.questionGroups.map((qg) => qg.shuffled(shuffle)),
    } as Test;
}

export function testSelectAnswer(
    this: Test,
    qgId: string,
    questionId: string,
    answerId: string
): Test {
    return {
        ...this,
        questionGroups: this.questionGroups.map((qg) =>
            qg.id === qgId ? qg.selectAnswer(questionId, answerId) : qg
        ),
    } as Test;
}

export function testUnselectAll(this: Test): Test {
    return {
        ...this,
        questionGroups: this.questionGroups.map((qg) => qg.unselectAll()),
    } as Test;
}
