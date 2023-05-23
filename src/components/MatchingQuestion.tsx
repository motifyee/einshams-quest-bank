import Answers from './Answers';
import Question from './Question';

function MatchingQuestion({ question }: { question: MatchingQuestion }) {
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
            test
        </>
    );
    const answerElement = Answers({ question });

    const props = {
        id: question.id,
        index: 1,
        question: questionElement,
        answers: answerElement,
    };

    return <Question {...props} />;
}

export default function MatchingQuestionGroup({
    questions,
}: {
    questions: MatchingQuestionGroup;
}) {
    let testMode = false;

    const allAnswers: Answer[] = questions.questions
        .map((q) => q.answer)
        .filter((e): e is Answer => !!e); //.flat();

    let allQuestions: MatchingQuestion[] = questions.questions.map((q) => ({
        ...q,
        answers: allAnswers,
    }));

    return (
        <div className="questions p-4 flex-1 overflow-y-auto">
            {(testMode ? allQuestions : questions.questions).map((q, i) => (
                <div key={q.id}>
                    <MatchingQuestion question={q} />
                    <br />
                </div>
            ))}
        </div>
    );
}
