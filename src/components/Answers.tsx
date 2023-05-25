import { useContext, useDebugValue } from 'react';
import { TestsActionsContext, SettingsContext } from '../lib/context';
import { selectAnswer } from '../lib/reducer';

const vibrate = (pattern = 35): boolean => {
    if ('vibrate' in navigator) navigator.vibrate(pattern);
    return true;
};

export default function Answers({
    question,
    qgId,
}: {
    question: Question;
    qgId: string;
}) {
    const settings = useContext(SettingsContext);
    const dispatchQuestions = useContext(TestsActionsContext);

    const select = (answerId: string) => {
        if (!settings.testModeOn) return console.log('testMode is off');
        if (settings.correctAnswers && question.selectedId(question))
            return vibrate(60) || console.log('already selected');
        dispatchQuestions(selectAnswer(qgId, question.id, answerId));
        vibrate();
    };

    const selectColor = 'bg-amber-700',
        correctColor = 'bg-green-700',
        wrongColor = 'bg-red-700',
        defaultColor = 'bg-slate-800';

    function answerStyle(answer: Answer) {
        if (!settings.testModeOn)
            return answer.correct ? correctColor : defaultColor;

        if (!settings.correctAnswers)
            return answer.selected ? selectColor : defaultColor;

        if (!question.selectedId(question)) return defaultColor;

        if (!answer.selected)
            return answer.correct ? correctColor : defaultColor;

        return answer.correct ? correctColor : wrongColor;
    }

    const answers = question.answerGroup?.answers ?? [question.answer];
    const dbg = useDebugValue(answers);

    return (
        <>
            {/* Answers */}
            {answers.map((answer, index) =>
                !!answer ? ( // might be undefined for matching questions
                    <div
                        key={answer.id}
                        className={`quest-answer ${answerStyle(answer)}`}
                    >
                        <input
                            type="radio"
                            onClick={(e) => select(answer.id)}
                            name="answer"
                            id={`answer${question.id}${index}`}
                            className="hidden"
                        />
                        <label
                            htmlFor={`answer${question.id}${index}`}
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
