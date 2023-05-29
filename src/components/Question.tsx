import {
    memo,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useRef,
} from 'react';
import { SettingsActCtx, SettingsCtx } from '../lib/context';
import useCaptureUpdate from '../lib/CaptureComponentUpdateHook';
import Answers from './Answers';

const vibrate = (pattern = 35): boolean => {
    if ('vibrate' in navigator) navigator.vibrate(pattern);
    return true;
};

function Question({
    qgId,
    index,
    question,
    blurred,
    unblur,
    settings,
    selected,
    onClick,
    setRef,
}: {
    qgId: string;
    index: number;
    question: Question;
    blurred: boolean;
    unblur: (questionId: string) => void;
    settings: Partial<Settings>;
    selected?: boolean;
    onClick?: (q: Question) => void;
    setRef?: (ref: React.RefObject<HTMLElement>, q: Question) => void;
}) {
    const [isCaptured] = useCaptureUpdate(
        question.id,
        () => '', //console.log('rendering ...', question.selectedId),
        true,
        300
    );

    const ref = useRef<HTMLElement>(null);
    useEffect(() => {
        if (setRef) setRef(ref, question);
    }, [ref]);

    const answered = !!question.selectedId(),
        correct = question.isCorrect(),
        spanClr =
            answered && settings.correctAnswers
                ? correct
                    ? 'correct'
                    : 'incorrect'
                : '';

    return (
        <div
            ref={ref as React.Ref<HTMLDivElement>}
            className={`quest-container ${selected ? 'selected' : ''}`}
            onClick={() => (onClick ? onClick(question) : null)}
        >
            <h2
                className={`quest-text ${(isCaptured && 'bg-slate-600') || ''}`}
            >
                <span className={`quest-span ${spanClr}`}>{index}</span>

                <span>{question.questionText}</span>
                {/* Image */}
                {question.image && (
                    <img
                        src={'./assets/' + question.image}
                        alt={question.imageAlt}
                        className="quest-image w-full h-auto my-2 "
                    />
                )}
            </h2>
            <div className="quest-answers">
                {/* Answers blur */}
                {blurred && (
                    <div
                        className="blur"
                        onDoubleClick={() => unblur(question.id)}
                    />
                )}

                {/* Answers */}
                <Answers settings={settings} question={question} qgId={qgId} />
            </div>
        </div>
    );
}

export default memo(Question);
