import Answers from './Answers';
import Question from './Question';

function MatchingQuestion({ question }: { question: MatchingQuestion }) {
    const questionElement = <span>{question.questionText}</span>;
    const answerElement = Answers({ question });

    const props = {
        id: question.id,
        index: 1,
        question: questionElement,
        answers: answerElement,
    };

    return <Question {...props} />;
}

export default function MatchingQuestions({
    questions,
}: {
    questions: MatchingQuestions;
}) {
    let testMode = true;

    const allAnswers: Answer[] = questions.items
        .map((q) => q.answer)
        .filter((e): e is Answer => !!e); //.flat();

    let allQuestions: MatchingQuestion[] = questions.items.map((q) => ({
        ...q,
        answers: allAnswers,
    }));

    return (
        <div className="questions p-4 flex-1 overflow-y-auto">
            {(testMode ? allQuestions : questions.items).map((q, i) => (
                <div key={q.id}>
                    <MatchingQuestion question={q} />
                    <br />
                </div>
            ))}
        </div>
    );
}
