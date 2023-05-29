import Question from './Question';
import { useCallback, useContext, useMemo } from 'react';
import { SettingsActCtx, SettingsCtx } from '../lib/context';

export default function MultiSelectQG({
    qg,
    index,
}: {
    qg: MultiChoiceQG;
    index: number;
}) {
    const settings = useContext(SettingsCtx);
    const setSettings = useContext(SettingsActCtx);

    const blurred = (id: string) =>
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
    const { questions } = qg;

    return (
        <div className="qg question-group">
            <div className="qg-title">اختيار من متعدد</div>
            {/* <div className="question-group-title">{qg.title}</div> */}
            {questions.map((q, i) => (
                <div key={q.id}>
                    <Question
                        qgId={qg.id}
                        question={q}
                        index={index + i + 1}
                        blurred={blurred(q.id)}
                        unblur={unblur}
                        settings={settingsPart}
                    />
                    {/* <br /> */}
                </div>
            ))}
        </div>
    );
}
