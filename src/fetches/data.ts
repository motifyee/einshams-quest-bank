import { v4 as uuid } from 'uuid';
import {
    questionIsCountable,
    questionGroupCorrectAnswersCount,
    questionGroupCountablesCount,
    questionIsCorrect,
    questionSelecedAnswerId,
    testCorrectAnswersCount,
    testCountablesCount,
    questionGroupShuffleQuestions,
    testShuffleQuestions,
    testSelectAnswer,
    questionGroupSelectAnswer,
    questionSelectAnswer,
    questionGroupUnselectAll,
    testUnselectAll,
} from '../lib/state-methods';
const l = console.log;
export function answer({
    id,
    value,
    correct,
    selected,
    image,
    imageAlt,
}: Answer): Answer {
    return {
        id: id || uuid(),
        value,
        correct,
        selected,
        image,
        imageAlt,
    };
}

export function answerGroup({
    id,
    answers = [],
}: Partial<AnswerGroup>): AnswerGroup {
    return {
        id: id || uuid(),
        answers,
        get isCorrect() {
            let c = this.answers.some((e) => e.selected);
            // // multichoice, trueorfalse and match questions
            // this.answers.some((e) => e.correct && e.selected) ||
            // // value questions
            // this.answers.find((e) => e.selected)?.value ===
            //     this.answers.find((e) => e.correct)?.value;
            return c;
        },
        // ic: function () {
        //     return (
        //         this.answers.some((e) => e.correct === e.selected) ||
        //         // value questions
        //         this.answers.find((e) => e.selected)?.value ===
        //             this.answers.find((e) => e.correct)?.value
        //     );
        // },
    };
}

const questionBase = {
    countable: questionIsCountable,
    isCorrect: questionIsCorrect,
    selectedId: questionSelecedAnswerId,
    selectAnswer: questionSelectAnswer,
};

const questionGroupBase = {
    countablesCount: questionGroupCountablesCount,
    correctAnswersCount: questionGroupCorrectAnswersCount,
    shuffled: questionGroupShuffleQuestions,
    selectAnswer: questionGroupSelectAnswer,
    unselectAll: questionGroupUnselectAll,
};

export function multiChoiceQuestion({
    id,
    questionText,
    answerGroup: answers,
    image,
    imageAlt,
}: Partial<MultiChoiceQ>): MultiChoiceQ {
    return {
        id: id || uuid(),
        questionText,
        answerGroup: answers,
        type: 'MULTICHOICE_Q',
        image,
        imageAlt,
        ...questionBase,
    };
}

export function multiChoiceQuestionGroup({
    id,
    questions,
    image,
    imageAlt,
}: MultiChoiceQG): MultiChoiceQG {
    return {
        id: id || uuid(),
        type: 'MULTICHOICE_QG',
        image,
        imageAlt,
        questions,
        cache: { questions } as MultiChoiceQG,
        ...questionGroupBase,
    };
}

export function trueOrFalseQuestion({
    id,
    questionText,
    answer,
    image,
    imageAlt,
}: Partial<TrueOrFalseQ>): TrueOrFalseQ {
    return {
        id: id || uuid(),
        questionText,
        answer,
        type: 'TRUEORFALSE_Q',
        image,
        imageAlt,
        ...questionBase,
    };
}
export function trueOrFalseQuestionGroup({
    id,
    questions,
    image,
    imageAlt,
}: TrueOrFalseQG): TrueOrFalseQG {
    return {
        id: id || uuid(),
        image,
        imageAlt,
        type: 'TRUEORFALSE_QG',
        questions,
        cache: { questions } as TrueOrFalseQG,
        ...questionGroupBase,
    };
}

export function valueQuestion({
    id,
    questionText,
    answer,
    image,
    imageAlt,
}: Partial<ValueQ>): ValueQ {
    return {
        id: id || uuid(),
        questionText,
        answer,
        type: 'VALUE_Q',
        image,
        imageAlt,
        ...questionBase,
    };
}

export function valueQuestionGroup({
    id,
    questions,
    image,
    imageAlt,
}: ValueQG): ValueQG {
    return {
        id: id || uuid(),
        image,
        imageAlt,
        type: 'VALUE_QG',
        questions,
        cache: { questions } as ValueQG,
        ...questionGroupBase,
    };
}

export function matchingQuestion({
    id = '',
    questionText,
    answer,
    answerGroup: answers,
    image,
    imageAlt,
}: Partial<MatchingQ>): MatchingQ {
    return {
        id: id || uuid(),
        questionText,
        answer,
        answerGroup: answers, // TODO wether to inherit from parent questions or keep it
        image,
        imageAlt,
        type: 'MATCHING_Q',
        ...questionBase,
    };
}

export function matchingQuestionGroup({
    id,
    questions: questions,
    image,
    imageAlt,
}: MatchingQG): MatchingQG {
    return {
        id: id || uuid(),
        image,
        imageAlt,
        type: 'MATCHING_QG',
        questions: questions,
        cache: { questions } as MatchingQG,
        ...questionGroupBase,
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
function parseImageData(
    this: any,
    text: string
): [boolean, string, string, string] {
    let pattern = /!\[(.*)\]\((.*)\)/;
    let clean = text.replace(pattern, '');
    let [, imageAlt, image] = pattern.exec(text) || [];
    return [!!image, imageAlt, image, clean];
}

export function parseMultiChoiceQuestion(text: string): MultiChoiceQ {
    text = text.trim();
    if (!text.length) return multiChoiceQuestion({});
    const [_, imageAlt, image, clean] = parseImageData(text);
    const [question, answerIdx, ...answersTxt] = clean
        .split('\n')
        .filter((e) => e.trim().length);
    return multiChoiceQuestion({
        questionText: question,
        image,
        imageAlt,
        answerGroup: answerGroup({
            answers: answersTxt.map((answerTxt, i) =>
                answer({
                    id: uuid(),
                    value: answerTxt,
                    correct: i + 1 === Number(answerIdx),
                })
            ),
        }),
    });
}

export function parseMultiChoichQuestionGroup(text: string): MultiChoiceQG {
    const [_, image, imageAlt, clean] = parseImageData(text);
    const questions: MultiChoiceQ[] = clean
        .split('#q#')
        .map((e) => e.trim())
        .filter((e) => e.length)
        .map(parseMultiChoiceQuestion);

    return multiChoiceQuestionGroup({
        id: uuid(),
        questions,
        image,
        imageAlt,
    } as MultiChoiceQG);
}

export function parseMatchingQuestion(text: string): MatchingQ {
    text = text.trim();
    if (!text.length) return matchingQuestion({});
    const [_, image, imageAlt, clean] = parseImageData(text);
    const [question, answerText] = clean.split('\n');
    return matchingQuestion({
        id: uuid(),
        questionText: question,
        image,
        imageAlt,
        answer: answer({ id: uuid(), value: answerText }),
    } as MatchingQ);
}

export function parseMatchingQuestionGroup(text: string): MatchingQG {
    const [_, image, imageAlt, clean] = parseImageData(text);
    const questions: MatchingQ[] = clean
        .split('#q#')
        .map(parseMatchingQuestion);
    return matchingQuestionGroup({
        id: uuid(),
        questions,
        image,
        imageAlt,
    } as MatchingQG);
}

export function parseTrueOrFalseQuestion(text: string): TrueOrFalseQ {
    text = text.trim();
    if (!text.length) return trueOrFalseQuestion({});
    const [_, image, imageAlt, clean] = parseImageData(text);
    const [question, _answer] = clean.split('\n');
    return trueOrFalseQuestion({
        questionText: question,
        image,
        imageAlt,
        answer: answer({ id: uuid(), value: _answer === '1' }),
    });
}

export function parseTrueOrFalseQuestionGroup(text: string): TrueOrFalseQG {
    const [_, image, imageAlt, clean] = parseImageData(text);
    const questions: TrueOrFalseQ[] = clean
        .split('#q#')
        .map(parseTrueOrFalseQuestion);
    return trueOrFalseQuestionGroup({
        id: uuid(),
        questions,
        image,
        imageAlt,
    } as TrueOrFalseQG);
}

export function parseValueQuestion(text: string): ValueQ {
    text = text.trim();
    if (!text.length) return valueQuestion({});
    const [_, image, imageAlt, clean] = parseImageData(text);
    const [question, answerValue] = clean.split('\n');
    return valueQuestion({
        questionText: question,
        image,
        imageAlt,
        answer: answer({ id: uuid(), value: answerValue }),
    });
}

export function parseValueQuestionGroup(text: string): ValueQG {
    const [_, image, imageAlt, clean] = parseImageData(text);
    const questions: ValueQ[] = clean.split('#q#').map(parseValueQuestion);
    return valueQuestionGroup({
        id: uuid(),
        questions,
        image,
        imageAlt,
    } as ValueQG);
}

export function parseTest(title: string, text: string): Test {
    const groups: QuestionGroup[] = [];
    const questionGroups = text.split('#qg#');
    questionGroups.forEach((questionText) => {
        const [questionType, questionGroup] = questionText
            .split('#qt#')
            .map((e) => e.trim());

        // const answers = questionParts[2].split('\n');
        switch (questionType) {
            case '#multichoice#':
                groups.push(parseMultiChoichQuestionGroup(questionGroup));
                break;
            case '#matching#':
                groups.push(parseMatchingQuestionGroup(questionGroup));
                break;
            case '#trueorfalse#':
                groups.push(parseTrueOrFalseQuestionGroup(questionGroup));
                break;
            case '#value#':
                groups.push(parseValueQuestionGroup(questionGroup));
                break;
            default:
                break;
        }
    });

    return {
        id: uuid(),
        title: title,
        questionGroups: groups,
        correctAnswersCount: testCorrectAnswersCount,
        countables: testCountablesCount,
        shuffled: testShuffleQuestions,
        selectAnswer: testSelectAnswer,
        unselectAll: testUnselectAll,
        cache: { questionGroups: groups } as Test,
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
