import { v4 as uuid } from 'uuid';
type qp = {
    id?: string;
    questionText: string;
    answers: Answer[];
    image?: string;
    imageAlt?: string;
};

export function selectionQuestion({
    id,
    questionText,
    answers,
    image,
    imageAlt,
}: qp): SelectionQuestion {
    return {
        id: id || uuid(),
        questionText,
        answers,
        get correctAnswers() {
            return this.answers.filter(
                (answer) => answer.correct && answer.selected
            ).length;
        },
        image,
        imageAlt,
    };
}

export function matchingQuestion({
    id,
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
        get correct() {
            return !!questionText && this.answer?.id === this.selectedId;
        },
        get countsAsCorrect() {
            // if has a specific answer and a question
            return !!this.questionText && !!this.answer;
        },
    };
}

export function matchingQuestions({
    id,
    questions,
    image,
    imageAlt,
}: MatchingQuestions): MatchingQuestions {
    return {
        id: id || uuid(),
        image,
        imageAlt,
        questions,
        get questionsCount() {
            return this.questions.reduce(
                (acc, curr) => acc + (curr.countsAsCorrect ? 1 : 0),
                0
            );
        },
        get correctAnswersCount() {
            return this.questions.reduce(
                (acc, curr) => acc + (curr.correct ? 1 : 0),
                0
            );
        },
    };
}
