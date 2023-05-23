import Question from './Question';
import Answers from './Answers';

function MultiSelectQuestion({
    question,
    index,
}: {
    question: SelectionQuestion;
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

export default MultiSelectQuestion;
