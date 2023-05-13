import { v4 as uuid } from 'uuid';

export function question(id: string, qeustionText: string, answers: Answer[]) {
    return {
        id: id || uuid(),
        questionText: qeustionText ?? 'error extracting questions',
        answers: answers,
        get correctAnswers() {
            return this.answers.filter(
                (answer) => answer.correct && answer.selected
            ).length;
        },
    };
}
