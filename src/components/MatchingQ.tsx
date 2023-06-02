import React, {
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import Question from './Question';
import { SettingsActCtx, SettingsCtx, TestsActCtx } from '../lib/context';
import { setAnswer, unselectAnswer } from '../lib/reducer';

const vibrate = (pattern = 35): boolean => {
    if ('vibrate' in navigator) navigator.vibrate(pattern);
    return true;
};

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
        const rand = () => Math.random() - 0.5;
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
            if (q.selectedId() && settings.correctAnswers) return vibrate(60);

            setSelectedQ(q.id);
            vibrate();
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
                return (
                    qRefs[assocQId]?.current?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                    }) && vibrate()
                );
            if (assocQId && settings.testModeOn && settings.correctAnswers)
                return vibrate(60);

            dispatchQ(unselectAnswer(qg.id, assocQId));
            dispatchQ(
                setAnswer(qg.id, selectedQId, {
                    ...ans,
                    selected: true,
                    correct: false,
                })
            );
            setSelectedQ('');
            vibrate();
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
                            qId={q}
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
