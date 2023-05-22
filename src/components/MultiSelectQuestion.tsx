import Question from './Question';
import Answers from './Answers';

function MultiSelectQuestion({
    question,
    index,
}: {
    question: MultiSelectQuestion;
    index: number;
}) {
    const answers = Answers({ question });
    const questionElement = <span>{question.questionText}</span>;

    const props = {
        id: question.id,
        index,
        question: questionElement,
        answers,
    };

    return <Question {...props} />;
}

export default MultiSelectQuestion;
