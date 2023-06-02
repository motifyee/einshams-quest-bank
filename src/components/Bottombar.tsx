import { useContext, useMemo } from 'react';
import { StoreCtx, useStore } from '../lib/context';

function Bottombar() {
    const store = useStore(),
        test = store.getTest(store.activeTestId);

    const show = store.testModeOn && store.correctAnswers;

    const score = useMemo(() => {
        if (!store.testModeOn) return 0;
        // console.log('calculating...');

        return store?.testCorrectAnswersCount();
    }, [store.scoreTic]);

    return (
        <div className={`bottombar ${show ? '' : 'none'}`}>
            <div className="score">
                <span className="score__label">Score: </span>
                <span className="score__value">
                    {score}/{store?.getTestQs()?.length}
                </span>
            </div>
            <div className="actions">
                <button
                    className=""
                    onClick={() => store.setTest(test?.unselectAll())}
                >
                    مسح الإجابات
                </button>
            </div>
        </div>
    );
}

export default Bottombar;
