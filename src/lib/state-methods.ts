// ######################################## Question ########################################

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
// ######################################## QuestionGroup ########################################

export function questionGroupCorrectAnswersCount(this: QuestionGroup): number {
    return (this.questions as Question[]).filter((q) => q.isCorrect()).length;
}

export function questionGroupCountablesCount(this: QuestionGroup): number {
    return (this.questions as Question[]).filter((q) => q.countable()).length;
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
