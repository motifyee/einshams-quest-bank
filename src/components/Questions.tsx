import { useContext, useEffect, useRef, useState } from 'react';
import {
    SubjectsContext,
    SettingsContext,
    QuestionsContext,
    SettingsActionsContext,
    QuestionsActionsContext,
} from '../lib/context';
import MultiSelectQuestion from './MultiSelectQuestion';
import { setQuestions } from '../lib/reducer';

function Questions({
    questPanel,
}: {
    questPanel: React.RefObject<HTMLDivElement>;
}) {
    const questions = useContext(QuestionsContext),
        settings = useContext(SettingsContext),
        setSettings = useContext(SettingsActionsContext),
        subjects = useContext(SubjectsContext),
        dispatchQuestions = useContext(QuestionsActionsContext);

    useEffect(() => {
        if (!questions.length) {
            let initSub = 'إرشاد زراعي';
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
        <div ref={questPanel} className="questions p-4 flex-1 overflow-y-auto">
            {questions?.map((q, i) => (
                <div key={q.id}>
                    <MultiSelectQuestion question={q} index={i + 1} />
                    <br />
                </div>
            ))}

            <ScrollTopButton questPanel={questPanel} />
        </div>
    );
}

function ScrollTopButton({
    questPanel,
}: {
    questPanel: React.RefObject<HTMLDivElement>;
}) {
    const settings = useContext(SettingsContext);

    const raise = settings.testModeOn && settings.correctAnswers ? 'raise' : '',
        show = !settings.sidebarOn ? '' : 'none';

    const [hover, setHover] = useState('');

    return (
        <div
            className={`scroll-top ${raise} ${show} ${hover}`}
            onClick={() =>
                questPanel.current?.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                })
            }
            onPointerMoveCapture={() => setHover('hover')}
            onPointerDownCapture={() => setHover('hover')}
            // onPointerLeaveCapture={() => setHover('')}
            onPointerOutCapture={() => setHover('')}
            onPointerUp={() => setHover('')}
        />
    );
}

export default Questions;
