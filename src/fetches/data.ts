import { v4 as uuid } from 'uuid';
import {
    qIsCountable,
    qgCorrectAnswersCount,
    qgCountablesCount,
    qIsCorrect,
    qSelecedAnswerId,
    tCorrectAnswersCount,
    tCountablesCount,
    qgShuffleQuestions,
    tShuffleQuestions,
    tSelectAnswer,
    qgSelectAnswer,
    qSelectAnswer,
    qgUnselectAll,
    tUnselectAll,
    tSetAnswer,
    qUnselectAnswer,
    qAddAnswer,
    qCorrectAnswerId,
    qgSetAnswer,
    qgUnselectAnswer,
    tUnselectAnswer,
    qgSelectingId,
} from '../lib/state-methods';
import { q } from './agri-guiding-1';
const l = console.log;
export function answer({
    id,
    value = '',
    correct,
    selected,
    image,
    imageAlt,
}: Partial<Answer>): Answer {
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
    };
}
// : Partial<Question>
const questionBase = {
    countable: qIsCountable,
    isCorrect: qIsCorrect,
    selectedId: qSelecedAnswerId,
    correctId: qCorrectAnswerId,
    selectAnswer: qSelectAnswer,
    unselectAnswer: qUnselectAnswer,
    addAnswer: qAddAnswer,
};

// :Partial<QuestionGroup>
const questionGroupBase = {
    countablesCount: qgCountablesCount,
    correctAnswersCount: qgCorrectAnswersCount,
    shuffled: qgShuffleQuestions,
    selectAnswer: qgSelectAnswer,
    setAnswer: qgSetAnswer,
    unselectAll: qgUnselectAll,
    unselectAnswer: qgUnselectAnswer,
    selectingId: qgSelectingId,
};

export function multiChoiceQuestion({
    id,
    questionText,
    ag,
    image,
    imageAlt,
}: Partial<MultiChoiceQ>): MultiChoiceQ {
    return {
        id: id || uuid(),
        questionText,
        ag: ag || answerGroup({}),
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
        questionIds: questions?.map((e) => e.id) || [],
        cache: { questions } as MultiChoiceQG,
        ...questionGroupBase,
    };
}

export function trueOrFalseQuestion({
    id,
    questionText,
    answerValue = true,
    image,
    imageAlt,
}: Partial<TrueOrFalseQ>): TrueOrFalseQ {
    return {
        id: id || uuid(),
        questionText,
        ag: answerGroup({
            answers: [
                answer({
                    value: answerValue,
                    correct: true,
                }),
            ],
        }),
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
        questionIds: questions?.map((e) => e.id) || [],
        cache: { questions } as TrueOrFalseQG,
        ...questionGroupBase,
    };
}

export function valueQuestion({
    id,
    questionText,
    answerValue = 0,
    image,
    imageAlt,
}: Partial<ValueQ>): ValueQ {
    return {
        id: id || uuid(),
        questionText,
        ag: answerGroup({
            answers: [
                answer({
                    value: answerValue,
                    correct: true,
                }),
            ],
        }),
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
        questionIds: questions?.map((e) => e.id) || [],
        cache: { questions } as ValueQG,
        ...questionGroupBase,
    };
}

export function matchingQuestion({
    id = uuid(),
    questionText,
    ag = answerGroup({}),
    image,
    imageAlt,
}: Partial<MatchingQ>): MatchingQ {
    return {
        id,
        questionText,
        ag,
        image,
        imageAlt,
        type: 'MATCHING_Q',
        ...questionBase,
    };
}

export function matchingQuestionGroup({
    id,
    questions,
    image,
    imageAlt,
}: MatchingQG): MatchingQG {
    return {
        id: id || uuid(),
        image,
        imageAlt,
        type: 'MATCHING_QG',
        questions,
        questionIds: questions?.map((e) => e.id) || [],
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
        ag: answerGroup({
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
    // const [_, image, imageAlt, clean] = parseImageData(text);
    const questions: MultiChoiceQ[] = text
        .split('#q#')
        .map((e) => e.trim())
        .filter((e) => e.length)
        .map(parseMultiChoiceQuestion);

    return multiChoiceQuestionGroup({
        id: uuid(),
        questions,
        // image,
        // imageAlt,
    } as MultiChoiceQG);
}

export function parseMatchingQuestion(text: string): MatchingQ {
    text = text.trim();
    if (!text.length) return matchingQuestion({});
    const [_, image, imageAlt, clean] = parseImageData(text);
    const [question, answerText] = clean.split('\n');
    return matchingQuestion({
        questionText: question,
        image,
        imageAlt,
        ag: answerGroup({
            answers: [
                answer({
                    id: uuid(),
                    value: answerText,
                    correct: true,
                }),
            ],
        }),
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
    const [question, _answer] = clean.split('\n').map((e) => e.trim());
    return trueOrFalseQuestion({
        questionText: question,
        image,
        imageAlt,
        ag: answerGroup({
            answers: [
                answer({
                    id: uuid(),
                    value: 'True',
                    correct: _answer === '1',
                }),
                answer({
                    id: uuid(),
                    value: 'False',
                    correct: _answer === '0',
                }),
            ],
        }),
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
        ag: answerGroup({
            answers: [
                answer({
                    id: uuid(),
                    value: answerValue,
                }),
            ],
        }),
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
        qgs: groups,
        qgIds: groups.map((e) => e.id),
        correctAnswersCount: tCorrectAnswersCount,
        countables: tCountablesCount,
        shuffled: tShuffleQuestions,
        selectAnswer: tSelectAnswer,
        setAnswer: tSetAnswer,
        unselectAll: tUnselectAll,
        unselectAnswer: tUnselectAnswer,
        cache: { qgs: groups } as Test,
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
