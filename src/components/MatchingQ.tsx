import React, {
    Ref,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import Answers from './Answers';
import Question from './Question';
import { SettingsActCtx, SettingsCtx, TestsActCtx } from '../lib/context';
import { selectAnswer, setAnswer, unselectAnswer } from '../lib/reducer';

function MatchingQ({ question }: { question: MatchingQ }) {
    const questionElement = (
        <>
            <span>{question.questionText}</span>
            {/* Image */}
            {question.image && (
                <img
                    src={'./assets/' + question.image}
                    alt={question.imageAlt}
                    className="quest-image w-full h-auto my-2 "
                />
            )}
            test
        </>
    );
    // const answerElement = <Answers qgId={qgid} />;

    const props = {
        id: question.id,
        index: 1,
        question: questionElement,
        // answers: answerElement,
    };

    // return <Question {...props} />;
}
/**
 * Question:
 * - Answer: intra-selected
 * - Answer: inter-selected
 * - Answer: inter-selected
 * - Answer: inter-selected
 *
 *
 * Context:
 * - All Answers
 * - All Questions
 *
 */
export default function MatchingQG({
    qg,
    index,
}: {
    qg: MatchingQG;
    index: number;
}) {
    const settings = useContext(SettingsCtx);
    const setSettings = useContext(SettingsActCtx);

    const isBlurred = (id: string) =>
        !(settings.unblurredQuestion === id) &&
        settings.blurAnswers &&
        !settings.testModeOn;

    const unblur = useCallback(
        (questionId: string) =>
            setSettings((settings) => ({
                ...settings,
                unblurredQuestion: questionId,
            })),
        []
    );

    const settingsPart = useMemo(
        () => ({
            testModeOn: settings.testModeOn,
            correctAnswers: settings.correctAnswers,
        }),
        [settings.testModeOn, settings.correctAnswers]
    );

    // const qRefs = useRef<{ [id: string]: HTMLDivElement }>({});
    const [qRefs, setQRefs] = useState<{
        [id: string]: React.RefObject<HTMLElement>;
    }>({});
    const [selectedQ, setSelectedQ] = useState<string>('');
    const [answers, setAnswers] = useState<{ [id: string]: Answer }>({});

    useEffect(() => {
        let answers: { [id: string]: Answer } = {};
        const rand = () => 0; // Math.random() - 0.5;
        [...qg.questions].sort(rand).forEach((q) => {
            q.ag?.answers.forEach((ans) => {
                answers[ans.id] = ans;
            });
        });
        setAnswers(answers);
    }, []);

    useEffect(() => {
        setSelectedQ('');
    }, [settings.testModeOn, settings.correctAnswers]);

    const dispatchQ = useContext(TestsActCtx);
    const onQClick = useCallback(
        (q: Question) => {
            if (!settings.testModeOn) return;
            if (q.selectedId() && settings.correctAnswers) return;

            setSelectedQ(q.id);
        },
        [settings.testModeOn, settings.correctAnswers]
    );
    const ansIsSelected = (ansId: string) =>
        qg.selectingId(ansId) ? 'selected' : '';
    const setRefs = useCallback(
        (el: React.RefObject<HTMLElement>, q: Question) =>
            setQRefs((refs) => ({
                ...refs,
                [q.id]: el,
            })),
        []
    );
    const onAnsClick = useCallback(
        (qg: QuestionGroup, selectedQId: string, ans: Answer) => {
            let assocQId: string = qg.selectingId(ans.id);
            if (!selectedQId)
                return qRefs[assocQId]?.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                });
            if (assocQId && settings.testModeOn && settings.correctAnswers)
                return;

            dispatchQ(unselectAnswer(qg.id, assocQId));
            dispatchQ(
                setAnswer(qg.id, selectedQId, {
                    ...ans,
                    selected: true,
                    correct: false,
                })
            );
            setSelectedQ('');
        },
        [selectedQ, settings.testModeOn, settings.correctAnswers]
    );

    return (
        <div className="qg">
            <div className="qg-title">صل الإجابة الصحيحة</div>
            <div className="questions">
                {qg.questions.map((q, i) => (
                    <div key={q.id}>
                        <Question
                            qgId={qg.id}
                            question={q}
                            index={index + i + 1}
                            blurred={isBlurred(q.id)}
                            unblur={unblur}
                            settings={settingsPart}
                            onClick={onQClick}
                            selected={selectedQ === q.id}
                            setRef={setRefs}
                        />
                    </div>
                ))}
            </div>

            {settings.testModeOn && (
                <div className="quest-container matching-answers-container relative ">
                    <div className="matching-answers-title">اختر الإجابة</div>
                    <div className="quest-answers matching-answers">
                        {Object.values(answers).map((ans) => (
                            <div
                                key={ans.id}
                                onClick={() => onAnsClick(qg, selectedQ, ans)}
                                className={`matching-answer ${ansIsSelected(
                                    ans.id
                                )}`}
                            >
                                <div>{ans.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

// export default () => null;
