import { memo, useCallback, useContext, useMemo } from 'react';
import { SettingsActionsContext, SettingsContext } from '../lib/context';
import useCaptureUpdate from '../lib/CaptureComponentUpdateHook';

const vibrate = (pattern = 35): boolean => {
    if ('vibrate' in navigator) navigator.vibrate(pattern);
    return true;
};

function Question({
    id,
    index,
    questionEl,
    answersEl,
    question,
    blurred,
    unblur,
    correctAnswers,
}: {
    id: string;
    index: number;
    questionEl: JSX.Element;
    answersEl: JSX.Element;
    question: Question;
    blurred: boolean;
    unblur: (questionId: string) => void;
    correctAnswers: boolean;
}) {
    const [isCaptured] = useCaptureUpdate(
        id,
        () => '', //console.log('rendering ...', question.selectedId),
        true,
        300
    );
    // const settings = useContext(SettingsContext);
    // const setSettings = useContext(SettingsActionsContext);

    const answered = !!question.selectedId(),
        correcting = correctAnswers,
        correct = question.isCorrect(),
        spbg =
            answered && correcting ? (correct ? 'correct' : 'incorrect') : '';

    // const unblur = useCallback(
    //     (questionId: string) =>
    //         setSettings((settings) => ({
    //             ...settings,
    //             unbluredQuestion: questionId,
    //         })),
    //     []
    // );
    return (
        <div className={`quest-container`}>
            <h2
                className={`quest-text ${(isCaptured && 'bg-slate-600') || ''}`}
            >
                <span className={`quest-span ${spbg}`}>{index}</span>
                {questionEl}
            </h2>
            <div className="quest-answers">
                {/* Answers blur */}
                {blurred && (
                    <div className="blur" onDoubleClick={() => unblur(id)} />
                )}

                {/* Answers */}
                {answersEl}
            </div>
        </div>
    );
}

export default Question;
