import { useContext, useMemo } from 'react';
import { TestsActCtx, TestCtx, SettingsCtx } from '../lib/context';
import { unselectAllQuestionsAnswers } from '../lib/reducer';

// TODO optimize showing and hiding while maintaining the animations
// TODO hint:start at pos:0 and add class to animate to pos:1
function Bottombar() {
    const settings = useContext(SettingsCtx),
        test = useContext(TestCtx),
        dispatchQuestions = useContext(TestsActCtx);

    const show = settings.testModeOn && settings.correctAnswers;

    const score = useMemo(() => {
        if (!settings.testModeOn) return 0;
        // console.log('calculating...');

        return test.correctAnswersCount();
    }, [test]);

    return (
        <div className={`bottombar ${show ? '' : 'none'}`}>
            <div className="score">
                <span className="score__label">Score: </span>
                <span className="score__value">
                    {score}/{test.countables()}
                </span>
            </div>
            <div className="actions">
                <button
                    className=""
                    onClick={() =>
                        dispatchQuestions(unselectAllQuestionsAnswers())
                    }
                >
                    مسح الإجابات
                </button>
            </div>
        </div>
    );
}

export default Bottombar;
