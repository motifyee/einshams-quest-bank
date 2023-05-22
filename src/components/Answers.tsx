import { useContext } from 'react';
import { QuestionsActionsContext, SettingsContext } from '../lib/context';
import { selectAnswer } from '../lib/reducer';

const vibrate = (pattern = 35): boolean => {
    if ('vibrate' in navigator) navigator.vibrate(pattern);
    return true;
};

export default function Answers({
    question,
}: {
    question: MultiSelectQuestion | MatchingQuestion;
}) {
    const settings = useContext(SettingsContext);
    const dispatchQuestions = useContext(QuestionsActionsContext);

    const select = (answerId: string) => {
        if (!settings.testModeOn) return console.log('testMode is off');
        if (settings.correctAnswers && question.selectedId)
            return vibrate(60) || console.log('already selected');
        dispatchQuestions(selectAnswer(question.id, answerId));
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

        if (!question.selectedId) return defaultColor;

        if (!answer.selected)
            return answer.correct ? correctColor : defaultColor;

        return answer.correct ? correctColor : wrongColor;
    }

    function isMultiSelectQuestion(
        question: MultiSelectQuestion | MatchingQuestion | MatchingQuestions
    ): question is MultiSelectQuestion {
        return 'answers' in question;
    }

    const answers = isMultiSelectQuestion(question)
        ? question.answers
        : [question.answer];

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
                            {answer.text}
                        </label>
                    </div>
                ) : (
                    ''
                )
            )}
        </>
    );
}
