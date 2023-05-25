import { memo, useContext, useDebugValue } from 'react';
import { SettingsActionsContext, SettingsContext } from '../lib/context';
import useCaptureUpdate from '../lib/CaptureComponentUpdateHook';

const vibrate = (pattern = 35): boolean => {
    if ('vibrate' in navigator) navigator.vibrate(pattern);
    return true;
};

function Question({
    id,
    index,
    questionElement,
    answers,
    question,
}: {
    id: string;
    index: number;
    questionElement: JSX.Element;
    answers: JSX.Element;
    question: Question;
}) {
    const setSettings = useContext(SettingsActionsContext);
    const settings = useContext(SettingsContext);

    const unblur = (questionId: string) => {
        setSettings({ ...settings, unbluredQuestion: questionId });
        vibrate();
    };

    const [isCaptured] = useCaptureUpdate(
        id,
        () => '', //console.log('rendering ...', question.selectedId),
        true,
        300
    );

    const answered = question.selectedId(question),
        correcting = settings.correctAnswers,
        correct = question.isCorrect(question),
        spbg =
            answered && correcting ? (correct ? 'correct' : 'incorrect') : '';

    return (
        <div className={`quest-container`}>
            <h2
                className={`quest-text ${(isCaptured && 'bg-slate-600') || ''}`}
            >
                <span className={`quest-span ${spbg}`}>{index}</span>
                {questionElement}
            </h2>
            <div className="quest-answers">
                {/* Answers blur */}
                {!(settings.unbluredQuestion === id) &&
                    settings.blurAnswers &&
                    !settings.testModeOn && (
                        <div
                            className="blur"
                            onDoubleClick={() => unblur(id)}
                        />
                    )}

                {/* Answers */}
                {answers}
            </div>
        </div>
    );
}

export default memo(Question);
