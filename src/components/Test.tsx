import { useContext, useEffect } from 'react';
import {
    testsContext,
    SettingsContext,
    TestContext,
    SettingsActionsContext,
    TestsActionsContext,
} from '../lib/context';
import MultiChoiceQuestion from './MultiChoiceQuestion';
import { setTest } from '../lib/reducer';

function Test({ questPanel }: { questPanel: React.RefObject<HTMLDivElement> }) {
    const test = useContext(TestContext),
        settings = useContext(SettingsContext),
        setSettings = useContext(SettingsActionsContext),
        tests = useContext(testsContext),
        dispatchQuestions = useContext(TestsActionsContext);

    useEffect(() => {
        setSettings({
            ...settings,
            sidebarOn: false,
            test: tests[0],
        });
        dispatchQuestions(setTest(tests[0], settings.shuffleQuestions));
    }, []);

    function questionGroup(q: QuestionGroup, i: number) {
        switch (q.type) {
            case 'MULTICHOICEQUESTIONGROUP':
                return <MultiChoiceQuestion questionGroup={q} index={i + 1} />;
            default:
                return null;
        }
    }

    return (
        <div ref={questPanel} className="questions p-4 flex-1 overflow-y-auto">
            {test?.questionGroups.map((q, i) => (
                <div key={q.id}>
                    {questionGroup(q, i)}
                    <br />
                </div>
            ))}
        </div>
    );
}

export default Test;
