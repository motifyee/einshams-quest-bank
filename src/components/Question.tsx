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
    question,
    answers,
}: {
    id: string;
    index: number;
    question: JSX.Element;
    answers: JSX.Element;
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
    const dbg = useDebugValue(answers);

    return (
        <div className={`quest-container`}>
            <h2
                className={`quest-text ${(isCaptured && 'bg-slate-600') || ''}`}
            >
                <span className="quest-span">{index}</span>
                {question}
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
