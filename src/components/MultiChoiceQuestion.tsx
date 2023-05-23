import Question from './Question';
import Answers from './Answers';

export function MultiSelectQuestion({
    question,
    index,
}: {
    question: MultiChoiceQuestion;
    index: number;
}) {
    const answers = Answers({ question });
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
                <MultiSelectQuestion
                    key={q.id}
                    question={q}
                    index={index + i + 1}
                />
            ))}
        </div>
    );
}
