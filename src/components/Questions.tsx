import { useContext, useEffect, useRef, useState } from 'react';
import {
    SubjectsContext,
    SettingsContext,
    QuestionsContext,
    SettingsActionsContext,
    QuestionsActionsContext,
} from '../lib/context';
import Question from './Question';
import { setQuestions } from '../lib/reducer';

// interface QuestionsProps {
//     children: ReactNode;{ children }: QuestionsProps
// }

function Questions() {
    const questions = useContext(QuestionsContext),
        settings = useContext(SettingsContext),
        setSettings = useContext(SettingsActionsContext),
        subjects = useContext(SubjectsContext),
        dispatchQuestions = useContext(QuestionsActionsContext);

    const raise = settings.testModeOn && settings.correctAnswers ? 'raise' : '',
        show = !settings.sidebarOn ? '' : 'none';

    const [hover, setHover] = useState('');

    const panel = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!questions.length) {
            let initSub = 'تجارة دولية 1';
            setSettings({
                ...settings,
                sidebarOn: false,
                subject: initSub,
                questions: subjects[initSub],
            });
            dispatchQuestions(
                setQuestions(subjects[initSub], settings.shuffleQuestions)
            );
        }
    }, []);

    return (
        <div ref={panel} className="p-4 flex-1 overflow-y-auto">
            {questions?.map((q, i) => (
                <div key={q.id}>
                    <Question question={q} index={i + 1} />
                    <br />
                </div>
            ))}

            <div
                className={`scroll-top ${raise} ${show} ${hover}`}
                onClick={() =>
                    panel.current?.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    })
                }
                onPointerMoveCapture={() => setHover('hover')}
                onPointerDownCapture={() => setHover('hover')}
                onPointerLeaveCapture={() => setHover('')}
                onPointerOutCapture={() => setHover('')}
                onPointerUp={() => setHover('')}
            />
        </div>
    );
}
export default Questions;
