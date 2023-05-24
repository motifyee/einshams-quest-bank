import { useContext, useMemo, useState } from 'react';
import {
    TestsActionsContext,
    TestContext,
    SettingsContext,
} from '../lib/context';
import { unselectAllQuestionsAnswers } from '../lib/reducer';

// TODO optimize showing and hiding while maintaining the animations
// TODO hint:start at pos:0 and add class to animate to pos:1
function Bottombar() {
    const settings = useContext(SettingsContext),
        questions = useContext(TestContext),
        dispatchQuestions = useContext(TestsActionsContext);

    const show = settings.testModeOn && settings.correctAnswers;

    const score = questions.correctAnswers;

    // useMemo(() => {
    //     if (!settings.testModeOn) return 0;
    //     console.log('calculating...');
    //     return .reduce((p, c) => p + (c.isCorrect ? 1 : 0), 0);
    // }, [questions]);

    return (
        <div className={`bottombar ${show ? '' : 'none'}`}>
            <div className="score">
                <span className="score__label">Score: </span>
                <span className="score__value">
                    {score}/{questions.countable}
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
