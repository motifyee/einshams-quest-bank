import { memo, useContext, useEffect, useRef } from 'react';
import { useGetQ, useSetUnblurredQuestion } from '../lib/context';
import useCaptureUpdate from '../lib/CaptureComponentUpdateHook';
import Answers from './Answers';

function Question({
    index,
    question,
    // qId,
    blurred,
    unblur,
    settings,
    selected,
    onClick,
    setRef,
}: {
    index: number;
    question: Question;
    // qId: string;
    blurred: boolean;
    unblur: (questionId: string) => void;
    settings: Partial<Settings>;
    selected?: boolean;
    onClick?: (q: Question) => void;
    setRef?: (ref: React.RefObject<HTMLElement>, q: Question) => void;
}) {
    const setUnblurredQuestion = useSetUnblurredQuestion();
    // let question = getQ(qId);
    if (!question?.id) return null;

    // const [isCaptured] = useCaptureUpdate(
    //     question.id,
    //     () => '', //console.log('rendering ...', q.selectedId),
    //     true,
    //     300
    // );

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
            <h2 className={`quest-text `}>
                {/* ${
                    (isCaptured &&
                        (question.type === 'MATCHING_Q'
                            ? 'bg-slate-800'
                            : 'bg-slate-600')) ||
                    ''
                } */}
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
                        onDoubleClick={() => setUnblurredQuestion(question.id)}
                    />
                )}

                {/* Answers */}
                <Answers settings={settings} question={question} />
            </div>
        </div>
    );
}

export default memo(Question);
