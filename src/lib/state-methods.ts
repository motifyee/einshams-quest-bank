export function questionSelecedAnswerId(question: Question): string {
    return (
        question.answerGroup?.answers?.find((answer) => answer.selected)?.id ??
        ''
    );
}

export function questionIsCorrect(question: Question): boolean {
    return (
        question.answerGroup?.answers?.some(
            (answer) => answer.correct && answer.selected
        ) ?? false
    );
}

export function questionIsAnswered(question: Question): boolean {
    return (
        question.answerGroup?.answers?.some((answer) => answer.selected) ??
        false
    );
}

export function questionIsCountable(question: Question): boolean {
    return (
        !!question.questionText &&
        (!!question.answerGroup?.answers?.length || !!question.answer?.value)
    );
}

export function questionGroupCorrectAnswersCount(
    questionGroup: QuestionGroup
): number {
    return (questionGroup.questions as Question[]).filter(questionIsCorrect)
        .length;
}

export function questionGroupCountablesCount(
    questionGroup: QuestionGroup
): number {
    return (questionGroup.questions as Question[]).filter(questionIsCountable)
        .length;
}

export function testCorrectAnswersCount(test: Test): number {
    return test.questionGroups.reduce(
        (acc, questionGroup) =>
            acc + questionGroupCorrectAnswersCount(questionGroup),
        0
    );
}

export function testCountablesCount(test: Test): number {
    return test.questionGroups.reduce(
        (acc, questionGroup) =>
            acc + questionGroupCountablesCount(questionGroup),
        0
    );
}
