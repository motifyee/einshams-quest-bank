import { useContext, useEffect } from 'react';
import {
    testsCtx,
    SettingsCtx,
    TestCtx,
    SettingsActCtx,
    TestsActCtx,
} from '../lib/context';
import MultiChoiceQ from './MultiChoiceQ';
import MatchingQG from './MatchingQ';
import { setTest } from '../lib/reducer';

function Test({ questPanel }: { questPanel: React.RefObject<HTMLDivElement> }) {
    const test = useContext(TestCtx),
        settings = useContext(SettingsCtx),
        setSettings = useContext(SettingsActCtx),
        tests = useContext(testsCtx),
        dispatchQuestions = useContext(TestsActCtx);

    useEffect(() => {
        let init = tests.find((t) => t.title === settings.test?.title);
        if (!init) {
            console.log('init', init, settings);
            setSettings({ ...settings, test: tests[0] });
            init = tests[0];
        }
        dispatchQuestions(setTest(init, settings.shuffleQuestions));
    }, []);

    function questionGroup(qg: QuestionGroup, i: number) {
        switch (qg.type) {
            case 'MULTICHOICE_QG':
                return <MultiChoiceQ qg={qg} index={i + 1} />;
            case 'MATCHING_QG':
                return <MatchingQG qg={qg} index={i + 1} />;
            default:
                return null;
        }
    }

    return (
        <div ref={questPanel} className="questions  overflow-y-auto">
            {test?.qg.map((qg, i) => (
                <div key={qg.id}>
                    {/* {test ? console.log(qg) + '' : ''} */}

                    {questionGroup(qg, i)}
                    <br />
                </div>
            ))}
        </div>
    );
}

export default Test;
