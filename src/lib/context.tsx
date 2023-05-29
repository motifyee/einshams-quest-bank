import { Dispatch, SetStateAction, createContext, useReducer } from 'react';
import { Action, reducer } from './reducer';
import useSettings, { defaultSettings } from './settings';
import tests from './tests';
// import ITQuestions2 from '../fetches/ITQuestions2';
const defaultAction: Dispatch<SetStateAction<Settings>> = () => {};
// | Dispatch<SetStateAction<Question[]>>

export const testsCtx = createContext(tests);
// export const SubjectsActionsContext = createContext(defaultAction);

export const TestCtx = createContext(tests[0]);
export const TestsActCtx = createContext((() => {}) as Dispatch<Action>);

export const SettingsCtx = createContext(defaultSettings);
export const SettingsActCtx = createContext(defaultAction);

const QuestionsProvider = ({ children }: any) => {
    const [settings, setSettings] = useSettings(); //useState(defaultSettings);
    const [test, dispatch] = useReducer(reducer, tests[0]);

    return (
        // <SubjectsActionsContext.Provider value={defaultAction}>
        <SettingsActCtx.Provider value={setSettings}>
            <TestsActCtx.Provider value={dispatch}>
                <testsCtx.Provider value={tests}>
                    <SettingsCtx.Provider value={settings}>
                        <TestCtx.Provider value={test}>
                            {children}
                        </TestCtx.Provider>
                    </SettingsCtx.Provider>
                </testsCtx.Provider>
            </TestsActCtx.Provider>
        </SettingsActCtx.Provider>
        // </SubjectsActionsContext.Provider>
    );
};

export default QuestionsProvider;
