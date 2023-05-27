// ######################################## Question ########################################

export function qSelecedAnswerId(this: Question): string {
    return this.ag?.answers?.find((answer) => answer.selected)?.id ?? '';
}

export function qIsCorrect(this: Question): boolean {
    return (
        this.ag?.answers?.some((answer) => answer.correct && answer.selected) ??
        false
    );
}

export function qIsAnswered(this: Question): boolean {
    return this.ag?.answers?.some((answer) => answer.selected) ?? false;
}

export function qIsCountable(this: Question): boolean {
    return (
        !!this.questionText &&
        (!!this.ag?.answers?.length || !!this.answer?.value)
    );
}

export function qSelectAnswer(this: Question, answerId: string): Question {
    return {
        ...this,
        ag: {
            ...this.ag,
            answers: this.ag?.answers?.map((answer) => ({
                ...answer,
                selected: answer.id === answerId,
            })),
        },
    } as Question;
}

// ######################################## QuestionGroup ########################################

export function qgCorrectAnswersCount(this: QG): number {
    return (this.questions as Question[]).filter((q) => q.isCorrect()).length;
}

export function qgCountablesCount(this: QG): number {
    return (this.questions as Question[]).filter((q) => q.countable()).length;
}

export function qgShuffleQuestions(this: QG, shuffle: boolean): QG {
    const answers: any = {};
    this.questions.forEach(
        (question) => (answers[question.id] = question.selectedId())
    );
    const ans = (q: Question) => q.selectAnswer(answers[q.id]);
    const rand = () => Math.random() - 0.5;

    let questions = [...(this.cache as QG).questions].map(ans);
    if (shuffle) questions = questions.sort(rand);

    return {
        ...this,
        shuffle,
        questions,
    } as QG;
}

export function qgSelectAnswer(
    this: QG,
    questionId: string,
    answerId: string
): QG {
    // console.log('questionGroupSelectAnswer', questionId, answerId, this.)
    return {
        ...this,
        questions: this.questions.map((question) =>
            question.id === questionId
                ? question.selectAnswer(answerId)
                : question
        ),
    } as QG;
}

export function qgUnselectAll(this: QG) {
    return {
        ...this,
        questions: this.questions.map((question) => question.selectAnswer('')),
    } as QG;
}

// ######################################## Test ########################################

export function tCorrectAnswersCount(this: Test): number {
    return this.qg.reduce(
        (acc, questionGroup) => acc + questionGroup.correctAnswersCount(),
        0
    );
}

export function tCountablesCount(this: Test): number {
    return this.qg.reduce(
        (acc, questionGroup) => acc + questionGroup.countablesCount(),
        0
    );
}

export function tShuffleQuestions(this: Test, shuffle: boolean): Test {
    // console.log('testShuffleQuestions');
    return {
        ...this,
        shuffle: shuffle,
        qg: this.qg.map((qg) => qg.shuffled(shuffle)),
    } as Test;
}

export function tSelectAnswer(
    this: Test,
    qgId: string,
    qId: string,
    answerId: string
): Test {
    return {
        ...this,
        qg: this.qg.map((qg) =>
            qg.id === qgId ? qg.selectAnswer(qId, answerId) : qg
        ),
    } as Test;
}

export function tUnselectAll(this: Test): Test {
    return {
        ...this,
        qg: this.qg.map((qg) => qg.unselectAll()),
    } as Test;
}
