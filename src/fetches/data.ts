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
}: Partial<MultiChoiceQuestion>): MultiChoiceQuestion {
    return {
        id: id || uuid(),
        questionText,
        answerGroup: answers,
        type: 'MULTICHOICEQUESTION',
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
}: MultiChoiceQuestionGroup): MultiChoiceQuestionGroup {
    return {
        id: id || uuid(),
        type: 'MULTICHOICEQUESTIONGROUP',
        image,
        imageAlt,
        questions,
        ...questionGroupBase,
    };
}

export function trueOrFalseQuestion({
    id,
    questionText,
    answer,
    image,
    imageAlt,
}: Partial<TrueOrFalseQuestion>): TrueOrFalseQuestion {
    return {
        id: id || uuid(),
        questionText,
        answer,
        type: 'TRUEORFALSEQUESTION',
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
}: TrueOrFalseQuestionGroup): TrueOrFalseQuestionGroup {
    return {
        id: id || uuid(),
        image,
        imageAlt,
        type: 'TRUEORFALSEQUESTIONGROUP',
        questions,
        ...questionGroupBase,
    };
}

export function valueQuestion({
    id,
    questionText,
    answer,
    image,
    imageAlt,
}: Partial<ValueQuestion>): ValueQuestion {
    return {
        id: id || uuid(),
        questionText,
        answer,
        type: 'VALUEQUESTION',
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
}: ValueQuestionGroup): ValueQuestionGroup {
    return {
        id: id || uuid(),
        image,
        imageAlt,
        type: 'VALUEQUESTIONGROUP',
        questions,
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
}: Partial<MatchingQuestion>): MatchingQuestion {
    return {
        id: id || uuid(),
        questionText,
        answer,
        answerGroup: answers, // TODO wether to inherit from parent questions or keep it
        image,
        imageAlt,
        type: 'MATCHINGQUESTION',
        ...questionBase,
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
        type: 'MATCHINGQUESTIONGROUP',
        questions: questions,
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

export function parseMultiChoiceQuestion(text: string): MultiChoiceQuestion {
    text = text.trim();
    if (!text.length) return multiChoiceQuestion({});
    const [question, answerIdx, ...answersTxt] = text
        .split('\n')
        .filter((e) => e.trim().length);
    return multiChoiceQuestion({
        questionText: question,
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

export function parseMultiChoichQuestionGroup(
    text: string
): MultiChoiceQuestionGroup {
    const questions: MultiChoiceQuestion[] = text
        .split('#q#')
        .map((e) => e.trim())
        .filter((e) => e.length)
        .map(parseMultiChoiceQuestion);

    return multiChoiceQuestionGroup({
        id: uuid(),
        questions,
    } as MultiChoiceQuestionGroup);
}

export function parseMatchingQuestion(text: string): MatchingQuestion {
    text = text.trim();
    if (!text.length) return matchingQuestion({});
    const [question, answerText] = text.split('\n');
    return matchingQuestion({
        id: uuid(),
        questionText: question,
        answer: answer({ id: uuid(), value: answerText }),
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
    } as MatchingQuestionGroup);
}

function parseTrueOrFalseQuestion(text: string): TrueOrFalseQuestion {
    text = text.trim();
    if (!text.length) return trueOrFalseQuestion({});
    const [question, _answer] = text.split('\n');
    return trueOrFalseQuestion({
        questionText: question,
        answer: answer({ id: uuid(), value: _answer === '1' }),
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
    } as TrueOrFalseQuestionGroup);
}

export function parseValueQuestion(text: string): ValueQuestion {
    text = text.trim();
    if (!text.length) return valueQuestion({});
    const [question, answerValue] = text.split('\n');
    return valueQuestion({
        questionText: question,
        answer: answer({ id: uuid(), value: answerValue }),
    });
}

export function parseValueQuestionGroup(text: string): ValueQuestionGroup {
    const questions: ValueQuestion[] = text
        .split('#q#')
        .map(parseValueQuestion);
    return valueQuestionGroup({
        id: uuid(),
        questions,
    } as ValueQuestionGroup);
}

export function parseTest(title: string, text: string): Test {
    const questions: QuestionGroup[] = [];
    const questionGroups = text.split('#qg#');
    questionGroups.forEach((questionText) => {
        const [questionType, questionGroup] = questionText
            .split('#qt#')
            .map((e) => e.trim());

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
        questionGroups: questions,
        correctAnswersCount: testCorrectAnswersCount,
        countables: testCountablesCount,
        shuffled: testShuffleQuestions,
        selectAnswer: testSelectAnswer,
        unselectAll: testUnselectAll,
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
