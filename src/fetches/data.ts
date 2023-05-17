import { v4 as uuid } from 'uuid';
type qp = {
    id?: string;
    questionText: string;
    answers: Answer[];
    image?: string;
    imageAlt?: string;
};
export function question({
    id,
    questionText,
    answers,
    image,
    imageAlt,
}: qp): Question {
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
