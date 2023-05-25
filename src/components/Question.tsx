import { memo, useContext, useMemo } from 'react';
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
    blurred,
    unblur,
}: {
    id: string;
    index: number;
    questionElement: JSX.Element;
    answers: JSX.Element;
    question: Question;
    blurred: boolean;
    unblur: (questionId: string) => void;
}) {
    const [isCaptured] = useCaptureUpdate(
        id,
        () => '', //console.log('rendering ...', question.selectedId),
        true,
        300
    );

    return (
        <div className={`quest-container`}>
            <h2
                className={`quest-text ${(isCaptured && 'bg-slate-600') || ''}`}
            >
                <span className={`quest-span ${'spbg'}`}>{index}</span>
                {questionElement}
            </h2>
            <div className="quest-answers">
                {/* Answers blur */}
                {blurred && (
                    <div className="blur" onDoubleClick={() => unblur(id)} />
                )}

                {/* Answers */}
                {answers}
            </div>
        </div>
    );
}

export default memo(Question);
