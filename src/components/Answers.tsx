import { useContext } from 'react';
import { TestsActionsContext, SettingsContext } from '../lib/context';
import { selectAnswer } from '../lib/reducer';

const vibrate = (pattern = 35): boolean => {
    if ('vibrate' in navigator) navigator.vibrate(pattern);
    return true;
};

function Answers({
    question,
    qgId,
    settings,
}: {
    question: Question;
    qgId: string;
    settings: Partial<Settings>;
}) {
    // const settings = useContext(SettingsContext);
    const dispatchQuestions = useContext(TestsActionsContext);

    const select = (answerId: string) => {
        if (!settings.testModeOn) return console.log('testMode is off');
        if (settings.correctAnswers && question.selectedId())
            return vibrate(60) && console.log('already selected');
        console.log('selecting answer', answerId);
        dispatchQuestions(selectAnswer(qgId, question.id, answerId));
        vibrate();
    };

    const selectColor = 'bg-amber-700',
        correctColor = 'bg-green-700',
        wrongColor = 'bg-red-700',
        defaultColor = 'bg-slate-800';

    function answerStyle(answer: A) {
        if (!settings.testModeOn)
            return answer.correct ? correctColor : defaultColor;

        if (!settings.correctAnswers)
            return answer.selected ? selectColor : defaultColor;

        if (!question.selectedId()) return defaultColor;

        if (!answer.selected)
            return answer.correct ? correctColor : defaultColor;

        return answer.correct ? correctColor : wrongColor;
    }

    const answers = question.ag?.answers ?? [question.answer];

    return (
        <>
            {/* Answers */}
            {answers.map((answer, index) =>
                !!answer ? ( // might be undefined for matching questions
                    <div
                        key={answer.id}
                        className={`quest-answer ${question.selectedId()} ${answerStyle(
                            answer
                        )}`}
                    >
                        <input
                            type="radio"
                            onClick={(e) => select(answer.id)}
                            name="answer"
                            id={`answer-${question.id}${index}`}
                            className="hidden"
                        />
                        <label
                            htmlFor={`answer-${question.id}${index}`}
                            className="quest-answerlable p-2"
                        >
                            {answer.value}
                        </label>
                    </div>
                ) : (
                    ''
                )
            )}
        </>
    );
}

export default Answers;
