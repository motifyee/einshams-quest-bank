import Answers from './Answers';
import Question from './Question';

function MatchingQ({ question }: { question: MatchingQ }) {
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
/**
 * Question:
 * - Answer: intra-selected
 * - Answer: inter-selected
 * - Answer: inter-selected
 * - Answer: inter-selected
 *
 *
 * Context:
 * - All Answers
 * - All Questions
 *
 */
export default function MatchingQG({
    qg,
    index,
}: {
    qg: MatchingQG;
    index: number;
}) {
    let testMode = false;

    const allAnswers: A[] = qg.questions
        .map((q) => q.answer)
        .filter((e): e is A => !!e); //.flat();

    let allQuestions: MatchingQ[] = qg.questions.map((q) => ({
        ...q,
        answers: allAnswers,
    }));

    return (
        <div className="questions p-4 flex-1 overflow-y-auto">
            {(testMode ? allQuestions : qg.questions).map((q, i) => (
                <div key={q.id}>
                    <MatchingQ question={q} />
                    <br />
                </div>
            ))}
        </div>
    );
}

// export default () => null;
