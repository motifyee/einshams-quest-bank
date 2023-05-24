import Question from './Question';
import Answers from './Answers';

export function MultiSelectQuestion({
    qgId,
    question,
    index,
}: {
    qgId: string;
    question: MultiChoiceQuestion;
    index: number;
}) {
    const answers = Answers({ question, qgId });
    const questionElement = (
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
    );

    const props = {
        id: question.id,
        index,
        question: questionElement,
        answers,
    };

    return <Question {...props} />;
}

export default function MultiSelectQuestionGroup({
    questionGroup,
    index,
}: {
    questionGroup: MultiChoiceQuestionGroup;
    index: number;
}) {
    return (
        <div className="question-group">
            <div className="question-group-title">{questionGroup.title}</div>
            {questionGroup.questions.map((q, i) => (
                <div key={q.id}>
                    <MultiSelectQuestion
                        qgId={questionGroup.id}
                        question={q}
                        index={index + i + 1}
                    />
                    <br />
                </div>
            ))}
        </div>
    );
}
