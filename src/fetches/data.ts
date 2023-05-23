import { v4 as uuid } from 'uuid';

export function answer({ id, text, isCorrect }: Answer): Answer {
    return {
        id: id || uuid(),
        text,
        isCorrect,
    };
}

export function answerGroup({ id, answers }: AnswerGroup): AnswerGroup {
    return {
        id: id || uuid(),
        answers,
    };
}

export function multiChoiceQuestion({
    id,
    questionText,
    answers,
    image,
    imageAlt,
}: {
    id?: string;
    questionText: string;
    answers: Answer[];
    image?: string;
    imageAlt?: string;
}): MultiChoiceQuestion {
    return {
        id: id || uuid(),
        questionText,
        answers,

        image,
        imageAlt,
        countable: true,
    };
}

export function multiChoiceQuestionGroup({
    id,
    questions,
    image,
    imageAlt,
}: MultiChoiceQuestionGroup): MultiChoiceQuestionGroup {
    return {
        id: id || uuid(),
        image,
        imageAlt,
        questions,
        get countable() {
            return questions.length;
        },
        get correctAnswersCount() {
            return this.questions.reduce(
                (acc, curr) => acc + (curr.isCorrect ? 1 : 0),
                0
            );
        },
    };
}

export function trueOrFalseQuestion({
    id,
    questionText,
    answer,
    image,
    imageAlt,
}: {
    id?: string;
    questionText: string;
    answer: boolean;
    image?: string;
    imageAlt?: string;
}): TrueOrFalseQuestion {
    return {
        id: id || uuid(),
        questionText,
        answer,

        image,
        imageAlt,
        countable: true,
    };
}
export function trueOrFalseQuestionGroup({
    id,
    questions,
    image,
    imageAlt,
}: TrueOrFalseQuestionGroup): TrueOrFalseQuestionGroup {
    return {
        id: id || uuid(),
        image,
        imageAlt,
        questions,
        get countable() {
            return this.questions.length;
        },
        get correctAnswersCount() {
            return this.questions.reduce(
                (acc, curr) => acc + (curr.isCorrect ? 1 : 0),
                0
            );
        },
    };
}

export function valueQuestion({
    id,
    questionText,
    answer,
    image,
    imageAlt,
}: {
    id?: string;
    questionText: string;
    answer: string;
    image?: string;
    imageAlt?: string;
}): ValueQuestion {
    return {
        id: id || uuid(),
        questionText,
        answer,

        image,
        imageAlt,
        countable: true,
    };
}

export function valueQuestionGroup({
    id,
    questions,
    image,
    imageAlt,
}: ValueQuestionGroup): ValueQuestionGroup {
    return {
        id: id || uuid(),
        image,
        imageAlt,
        questions,
        get countable() {
            return this.questions.length;
        },
        get correctAnswersCount() {
            return this.questions.reduce(
                (acc, curr) => acc + (curr.isCorrect ? 1 : 0),
                0
            );
        },
    };
}

export function matchingQuestion({
    id = '',
    questionText,
    answer,
    answers = [],
    image,
    imageAlt,
    selectedId = '',
}: MatchingQuestion): MatchingQuestion {
    return {
        id: id || uuid(),
        questionText,
        answer,
        answers, // TODO wether to inherit from parent questions or keep it
        image,
        imageAlt,
        selectedId,
        get isCorrect() {
            return !!questionText && this.answer?.id === this.selectedId;
        },
        get countable() {
            // if has a specific answer and a question
            return !!this.questionText && !!this.answer;
        },
    };
}

export function matchingQuestionGroup({
    id,
    questions: questions,
    image,
    imageAlt,
}: MatchingQuestionGroup): MatchingQuestionGroup {
    return {
        id: id || uuid(),
        image,
        imageAlt,
        questions: questions,
        get countable() {
            return this.questions.reduce(
                (acc, curr) => acc + (curr.countable ? 1 : 0),
                0
            );
        },
        get correctAnswersCount() {
            return this.questions.reduce(
                (acc, curr) => acc + (curr.isCorrect ? 1 : 0),
                0
            );
        },
    };
}

/**
 * questiongroup splitter: #qg#
 * question types: #multichoice#, #matching#, #trueorfalse#, #value#
 * question type splitter: #qt#
 * question splitter: #q#
 * answer splitter: \n
 *
 */

export function parseMultiChoiceQuestion(text: string): MultiChoiceQuestion {
    const [question, answerIndex, ...answers] = text.split('\n');
    return multiChoiceQuestion({
        questionText: question,
        answers: answers.map((answer, i) => ({
            id: uuid(),
            text: answer,
            isCorrect: i + 1 === Number(answerIndex),
        })),
    });
}

export function parseMultiChoichQuestionGroup(
    text: string
): MultiChoiceQuestionGroup {
    const questions: MultiChoiceQuestion[] = text
        .split('#q#')
        .map(parseMultiChoiceQuestion);
    return multiChoiceQuestionGroup({
        id: uuid(),
        questions,
        get countable() {
            return this.questions.reduce(
                (acc, curr) => acc + (+curr.countable && 1),
                0
            );
        },
        get correctAnswersCount() {
            return this.questions.reduce(
                (acc, curr) => acc + (curr.countable && curr.isCorrect ? 1 : 0),
                0
            );
        },
    } as MultiChoiceQuestionGroup);
}

export function parseMatchingQuestion(text: string): MatchingQuestion {
    const [question, answerText] = text.split('\n');
    return matchingQuestion({
        id: uuid(),
        questionText: question,
        answer: answer({ id: uuid(), text: answerText }),
    } as MatchingQuestion);
}

export function parseMatchingQuestionGroup(
    text: string
): MatchingQuestionGroup {
    const questions: MatchingQuestion[] = text
        .split('#q#')
        .map(parseMatchingQuestion);
    return matchingQuestionGroup({
        id: uuid(),
        questions,
        get countable() {
            return this.questions.reduce(
                (acc, curr) => acc + (+curr.countable && 1),
                0
            );
        },
        get correctAnswersCount() {
            return this.questions.reduce(
                (acc, curr) => acc + (curr.countable && curr.isCorrect ? 1 : 0),
                0
            );
        },
    } as MatchingQuestionGroup);
}

function parseTrueOrFalseQuestion(text: string): TrueOrFalseQuestion {
    const [question, answer] = text.split('\n');
    return trueOrFalseQuestion({
        questionText: question,
        answer: answer === '1',
    });
}

export function parseTrueOrFalseQuestionGroup(
    text: string
): TrueOrFalseQuestionGroup {
    const questions: TrueOrFalseQuestion[] = text
        .split('#q#')
        .map(parseTrueOrFalseQuestion);
    return trueOrFalseQuestionGroup({
        id: uuid(),
        questions,
        get countable() {
            return this.questions.reduce(
                (acc, curr) => acc + (+curr.countable && 1),
                0
            );
        },
        get correctAnswersCount() {
            return this.questions.reduce(
                (acc, curr) => acc + (curr.countable && curr.isCorrect ? 1 : 0),
                0
            );
        },
    } as TrueOrFalseQuestionGroup);
}

export function parseValueQuestion(text: string): ValueQuestion {
    const [question, answer] = text.split('\n');
    return valueQuestion({
        questionText: question,
        answer,
    });
}

export function parseValueQuestionGroup(text: string): ValueQuestionGroup {
    const questions: ValueQuestion[] = text
        .split('#q#')
        .map(parseValueQuestion);
    return valueQuestionGroup({
        id: uuid(),
        questions,
        get countable() {
            return this.questions.length;
        },
        get correctAnswersCount() {
            return this.questions.reduce(
                (acc, curr) => acc + (curr.countable && curr.isCorrect ? 1 : 0),
                0
            );
        },
    } as ValueQuestionGroup);
}

export function parseTest(title: string, text: string): Test {
    const questions: QuestionGroup[] = [];
    const questionGroups = text.split('#qg#');

    questionGroups.forEach((questionText) => {
        const [questionType, questionGroup] = questionText.split('#q#');

        // const answers = questionParts[2].split('\n');
        switch (questionType) {
            case '#multichoice#':
                questions.push(parseMultiChoichQuestionGroup(questionGroup));
                break;
            case '#matching#':
                questions.push(parseMatchingQuestionGroup(questionGroup));
                break;
            case '#trueorfalse#':
                questions.push(parseTrueOrFalseQuestionGroup(questionGroup));
                break;
            case '#value#':
                questions.push(parseValueQuestionGroup(questionGroup));
                break;
            default:
                break;
        }
    });
    return {
        id: uuid(),
        title: title,
        questions: questions,
        get correctAnswers() {
            return this.questions.reduce(
                (acc, curr) => acc + curr.countable,
                0
            );
        },
        get countable() {
            return this.questions.reduce(
                (acc, curr) => acc + curr.countable,
                0
            );
        },
    };
}

export function subject({
    id,
    name,
    teacher,
    tests: questions,
    scores = [],
}: Subject): Subject {
    return {
        id: id || uuid(),
        name,
        teacher,
        tests: questions,
        scores,
    };
}
