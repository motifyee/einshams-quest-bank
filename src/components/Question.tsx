import { memo, useContext, useId, useState } from 'react';
import {
    QuestionsActionsContext,
    SettingsActionsContext,
    SettingsContext,
} from '../lib/context';
import useCaptureUpdate from '../lib/CaptureComponentUpdateHook';
import { selectAnswer } from '../lib/reducer';

const vibrate = (pattern = 35): boolean => {
    if ('vibrate' in navigator) navigator.vibrate(pattern);
    return true;
};

function Question({ question, index }: { question: Question; index: number }) {
    const id = useId();
    const dispatchQuestions = useContext(QuestionsActionsContext);
    const setSettings = useContext(SettingsActionsContext);
    const settings = useContext(SettingsContext);

    const unblur = (questionId: string) => {
        setSettings({ ...settings, unbluredQuestion: questionId });
    };

    const select = (answerId: string) => {
        if (!settings.testModeOn) return console.log('testMode is off');
        if (settings.correctAnswers && question.selectedId)
            return vibrate(60) || console.log('already selected');
        dispatchQuestions(selectAnswer(question.id, answerId));
        vibrate();
    };
    const [isCaptured] = useCaptureUpdate(
        id,
        () => '', //console.log('rendering ...', question.selectedId),
        true,
        300
    );

    // const quickAnswers
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

    return (
        <div className={`quest-container`}>
            <h2
                className={`quest-text ${
                    (isCaptured && 'bg-slate-700') || 'text-xl'
                }`}
            >
                <span className="quest-span">{index}</span>
                {question.questionText}
            </h2>
            <br />
            <div className="quest-answers">
                {!(settings.unbluredQuestion === question.id) &&
                    settings.blurAnswers &&
                    !settings.testModeOn && (
                        <div
                            className="blur"
                            onDoubleClick={() => unblur(question.id)}
                        />
                    )}
                {question.answers.map((answer, index) => (
                    <div
                        key={answer.id}
                        className={`quest-answer ${answerStyle(answer)}`}
                    >
                        <input
                            type="radio"
                            onClick={(e) => select(answer.id)}
                            name="answer"
                            id={`answer${id}${index}`}
                            className="hidden"
                        />
                        <label
                            htmlFor={`answer${id}${index}`}
                            className="quest-answerlable p-2"
                        >
                            {answer.text}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default memo(Question);
