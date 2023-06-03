import { useDataStore, useSettingsStore } from '../lib/store';

const vibrate = (pattern = 35): boolean => {
    if ('vibrate' in navigator) navigator.vibrate(pattern);
    return true;
};

function Answers({ question }: { question: Question }) {
    const updateById = useDataStore((s) => s.updateById),
        testModeOn = useSettingsStore((s) => s.testModeOn),
        correctAnswers = useSettingsStore((s) => s.correctAnswers);

    const select = (answerId: string) => {
        if (!testModeOn) return console.log('testMode is off');
        if (correctAnswers && question.selectedId())
            return vibrate(60) && console.log('already selected');
        updateById(question.selectAnswer(answerId) as Question);
        vibrate();
    };

    const selectColor = 'bg-amber-700',
        correctColor = 'bg-green-700',
        wrongColor = 'bg-red-700',
        defaultColor = 'bg-slate-800';

    function answerStyle(answer: Answer) {
        if (!testModeOn) return answer.correct ? correctColor : defaultColor;

        if (!correctAnswers)
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
        //     testModeOn,
        //     answer.selected,
        //     answer.correct,
        //     question.type
        // );
        if (question.type === 'MATCHING_Q')
            if (testModeOn && answer.selected) return true;
            else if (!testModeOn && answer.correct) return true;
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
