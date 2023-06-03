import { useContext, useEffect } from 'react';
import { useInit, useTestsIds, useGetQG, useGetTest } from '../lib/context';
import MultiChoiceQ from './MultiChoiceQ';
import tests from '../lib/tests';
import { useDataStore } from '../lib/store';
function Test({ questPanel }: { questPanel: React.RefObject<HTMLDivElement> }) {
    // const store = useTest();
    const setData = useDataStore((s) => s.init);
    const getTestQs = useDataStore((s) => s.getTestQs);

    const init = useInit(),
        testsIds = useTestsIds(),
        getQG = useGetQG(),
        getTest = useGetTest();

    const tst = getTest(testsIds[0]);
    console.log('questions: ', getTestQs(tst?.id)?.length);

    useEffect(() => {
        init(tests);
        setData(tests);
    }, []);

    function questionGroup(id: string, i: number) {
        switch (getQG(id).type) {
            case 'MULTICHOICE_QG':
                return <MultiChoiceQ qgId={id} index={i + 1} />;
            // case 'MATCHING_QG':
            //     return <MatchingQG qg={id} index={i + 1} />;
            default:
                return null;
        }
    }

    return (
        <div ref={questPanel} className="questions  overflow-y-auto">
            {(tst?.qgIds as string[])?.map((id, i) => (
                <div key={id}>
                    {questionGroup(id, i)}
                    <br />
                </div>
            ))}
        </div>
    );
}

export default Test;
