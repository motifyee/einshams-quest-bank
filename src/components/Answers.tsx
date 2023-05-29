import { useContext } from 'react';
import { TestsActCtx } from '../lib/context';
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
    const dispatchQ = useContext(TestsActCtx);

    const select = (answerId: string) => {
        if (!settings.testModeOn) return console.log('testMode is off');
        if (settings.correctAnswers && question.selectedId())
            return vibrate(60) && console.log('already selected');
        dispatchQ(selectAnswer(qgId, question.id, answerId));
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

        if (!question.selectedId()) return defaultColor;

        if (!answer.selected)
            return answer.correct ? correctColor : defaultColor;

        if (question.isCorrect() && question.type === 'MATCHING_Q')
            return correctColor;

        return answer.correct ? correctColor : wrongColor;
    }

    function isShowable(answer: Answer) {
        // console.log(
        //     'isShowable',
        //     settings.testModeOn,
        //     answer.selected,
        //     answer.correct,
        //     question.type
        // );
        if (question.type === 'MATCHING_Q')
            if (settings.testModeOn && answer.selected) return true;
            else if (!settings.testModeOn && answer.correct) return true;
            else return false;

        if (!!answer.id) return true;
        return false;
    }

    return (
        <>
            {/* Answers */}
            {question.ag?.answers.map((answer, index) =>
                isShowable(answer) ? ( // might be undefined for some matching questions
                    <div
                        key={answer.id}
                        className={`quest-answer ${answerStyle(answer)}`}
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
                ) : null
            )}
        </>
    );
}

export default Answers;
