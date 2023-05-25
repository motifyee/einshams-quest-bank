import Question from './Question';
import Answers from './Answers';
import { useMemo } from 'react';

export function MultiSelectQuestion({
    qgId,
    question,
    index,
}: {
    qgId: string;
    question: MultiChoiceQuestion;
    index: number;
}) {
    const answers = useMemo(
        () => <Answers question={question} qgId={qgId} />,
        [question, qgId]
    );
    const questionElement = useMemo(
        () => (
            <>
                <span>{question.questionText}</span>
                {/* Image */}
                {question.image && (
                    <img
                        src={'./assets/' + question.image}
                        alt={question.imageAlt}
                        className="quest-image w-full h-auto my-2 "
                    />
                )}
            </>
        ),
        [question.questionText, question.image, question.imageAlt]
    );

    const props = {
        id: question.id,
        index,
        questionElement,
        question,
        answers,
    };

    return <Question {...props} />;
}

export default function MultiSelectQuestionGroup({
    questionGroup: qg,
    index,
}: {
    questionGroup: MultiChoiceQuestionGroup;
    index: number;
}) {
    const questions = qg.shuffle
        ? (qg.shuffled(qg.shuffle).shuffledCache as MultiChoiceQuestionGroup)
              .questions
        : qg.questions;

    return (
        <div className="question-group">
            <div className="question-group-title">{qg.title}</div>
            {questions.map((q, i) => (
                <div key={q.id}>
                    <MultiSelectQuestion
                        qgId={qg.id}
                        question={q}
                        index={index + i + 1}
                    />
                    <br />
                </div>
            ))}
        </div>
    );
}