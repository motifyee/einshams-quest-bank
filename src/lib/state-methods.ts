// ######################################## Question ########################################

import Answers from '../components/Answers';

export function qSelecedAnswerId(this: Question): string {
    return this.ag?.answers?.find((answer) => answer.selected)?.id ?? '';
}

export function qCorrectAnswerId(this: Question): string {
    return this.ag?.answers?.find((answer) => answer.correct)?.id ?? '';
}

export function qIsCorrect(this: Question): boolean {
    let correctId = this.correctId();
    return !!correctId && correctId === this.selectedId();
    // return this.type === 'MULTICHOICE_Q'
    // ? this.ag?.answers?.some(
    //       (answer) => answer.correct && answer.selected
    //   ) ?? false
}

export function qIsAnswered(this: Question): boolean {
    return this.ag?.answers?.some((answer) => answer.selected) ?? false;
}

export function qIsCountable(this: Question): boolean {
    return (
        !!this.questionText &&
        (this.ag?.answers?.some((answer: Answer) => answer.correct) ?? false)
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

export function qAddAnswer(this: Question, answer: Answer): Question {
    const oldAg = (ag: AnswerGroup) =>
        this.type === 'MATCHING_Q'
            ? ag.answers.filter((e) => e.correct)
            : ag.answers;

    return {
        ...this,
        ag: {
            ...this.ag,
            answers: [...oldAg(this.ag), answer],
        },
    } as Question;
}

export function qUnselectAnswer(this: Question): Question {
    // console.log('unselectAnswer', this.type, this.id);
    if (this.type === 'MATCHING_Q')
        return {
            ...this,
            ag: {
                ...this.ag,
                answers: this.ag?.answers?.filter((e) => e.correct),
            },
        } as Question;
    return this.selectAnswer('') as Question;
}

// ######################################## QuestionGroup ########################################

export function qgCorrectAnswersCount(this: QuestionGroup): number {
    return (this.questions as Question[]).filter((q) => q.isCorrect()).length;
}

export function qgCountablesCount(this: QuestionGroup): number {
    return (this.questions as Question[]).filter((q) => q.countable()).length;
}

export function qgShuffleQuestions(
    this: QuestionGroup,
    shuffle: boolean
): QuestionGroup {
    const answers: any = {};
    this.questions?.forEach(
        (question) => (answers[question.id] = question.selectedId())
    );
    const ans = (q: Question) => q.selectAnswer(answers[q.id]);
    const rand = () => Math.random() - 0.5;

    let questions = [...((this.cache as QuestionGroup).questions ?? [])].map(
        ans
    );
    if (shuffle) questions = questions.sort(rand);

    return {
        ...this,
        shuffle,
        questions,
    } as QuestionGroup;
}

export function qgSelectAnswer(
    this: QuestionGroup,
    questionId: string,
    answerId: string
): QuestionGroup {
    // console.log('questionGroupSelectAnswer', questionId, answerId, this.)
    return {
        ...this,
        questions: this.questions?.map((question) =>
            question.id === questionId
                ? question.selectAnswer(answerId)
                : question
        ),
    } as QuestionGroup;
}

export function qgSetAnswer(this: QuestionGroup, qId: string, answer: Answer) {
    // console.log('setting qg answer');
    return {
        ...this,
        questions: this.questions?.map((question) =>
            question.id === qId ? question.addAnswer(answer) : question
        ),
    } as QuestionGroup;
}

export function qgUnselectAll(this: QuestionGroup) {
    return {
        ...this,
        questions: this.questions?.map((question) => question.unselectAnswer()),
    } as QuestionGroup;
}

export function qgUnselectAnswer(
    this: QuestionGroup,
    questionId: string
): QuestionGroup {
    return {
        ...this,
        questions: this.questions?.map((question) =>
            question.id === questionId ? question.unselectAnswer() : question
        ),
    } as QuestionGroup;
}

// find the question with selected answer id
export function qgSelectingId(this: QuestionGroup, ansId: string): string {
    return (
        (this.questions as QBase[]).find((q) => q.selectedId() === ansId)?.id ??
        ''
    );
}
// ######################################## Test ########################################

export function tCorrectAnswersCount(this: Test): number {
    return (
        this.qgs?.reduce(
            (acc, questionGroup) => acc + questionGroup.correctAnswersCount(),
            0
        ) || 0
    );
}

export function tCountablesCount(this: Test): number {
    return (
        this.qgs?.reduce(
            (acc, questionGroup) => acc + questionGroup.countablesCount(),
            0
        ) || 0
    );
}

export function tShuffleQuestions(this: Test, shuffle: boolean): Test {
    // console.log('testShuffleQuestions');
    return {
        ...this,
        shuffle: shuffle,
        qgs: this.qgs?.map((qg) => qg.shuffled(shuffle)),
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
        qgs: this.qgs?.map((qg) =>
            qg.id === qgId ? qg.selectAnswer(qId, answerId) : qg
        ),
    } as Test;
}

export function tSetAnswer(
    this: Test,
    qgId: string,
    qId: string,
    answer: Answer
): Test {
    return {
        ...this,
        qgs: this.qgs?.map((qg) =>
            qg.id === qgId ? qg.setAnswer(qId, answer) : qg
        ),
    } as Test;
}

export function tUnselectAll(this: Test): Test {
    return {
        ...this,
        qgs: this.qgs?.map((qg) => qg.unselectAll()),
    } as Test;
}

export function tUnselectAnswer(this: Test, qgId: string, qId: string): Test {
    return {
        ...this,
        qgs: this.qgs?.map((qg) =>
            qg.id === qgId ? qg.unselectAnswer(qId) : qg
        ),
    } as Test;
}
