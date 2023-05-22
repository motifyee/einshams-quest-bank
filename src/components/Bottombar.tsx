import { useContext, useMemo, useState } from 'react';
import {
    QuestionsActionsContext,
    QuestionsContext,
    SettingsContext,
} from '../lib/context';
import { unselectAllQuestionsAnswers } from '../lib/reducer';

// TODO optimize showing and hiding while maintaining the animations
// TODO hint:start at pos:0 and add class to animate to pos:1
function Bottombar() {
    const settings = useContext(SettingsContext),
        questions = useContext(QuestionsContext),
        dispatchQuestions = useContext(QuestionsActionsContext);

    const show = settings.testModeOn && settings.correctAnswers;

    const score = useMemo(() => {
        if (!settings.testModeOn) return 0;
        console.log('calculating...');
        return questions.reduce((p, c) => p + (c.correct ? 1 : 0), 0);
    }, [questions]);

    return (
        <div className={`bottombar ${show ? '' : 'none'}`}>
            <div className="score">
                <span className="score__label">Score: </span>
                <span className="score__value">
                    {score}/{questions.length}
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
