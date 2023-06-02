import Question from './Question';
import { useCallback, useContext, useMemo } from 'react';
import { StoreCtx, useStore } from '../lib/context';

export default function MultiSelectQG({
    qgId,
    index,
}: {
    qgId: string;
    index: number;
}) {
    const store = useStore();

    const blurred = (id: string) =>
        (!(store.unblurredQuestion === id) &&
            store.blurAnswers &&
            !store.testModeOn) ??
        false;

    const unblur = useCallback(
        (qId: string) => store.setUnblurredQuestion(qId),
        []
    );

    const settingsPart = useMemo(
        () => ({
            testModeOn: store.testModeOn,
            correctAnswers: store.correctAnswers,
        }),
        [store.testModeOn, store.correctAnswers]
    );

    const qg = store.getQG(qgId);
    const questions = qg?.questionIds;

    return (
        <div className="qg question-group">
            <div className="qg-title">اختيار من متعدد</div>
            <div className="questions">
                {questions?.map((qId, i) => (
                    <div key={qId}>
                        <Question
                            question={store.getQ(qId)}
                            index={index + i + 1}
                            blurred={blurred(qId)}
                            unblur={unblur}
                            settings={settingsPart}
                        />
                        {/* <br /> */}
                    </div>
                ))}
            </div>
        </div>
    );
}
