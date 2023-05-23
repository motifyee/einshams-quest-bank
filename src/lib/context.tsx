import React, {
    Dispatch,
    SetStateAction,
    createContext,
    useReducer,
    useState,
} from 'react';
import { Action, reducer } from './reducer';
import { defaultSettings } from './settings';
import tests from './tests';
// import ITQuestions2 from '../fetches/ITQuestions2';
const defaultAction: Dispatch<SetStateAction<Settings>> = () => {};
// | Dispatch<SetStateAction<Question[]>>

export const testsContext = createContext(tests);
// export const SubjectsActionsContext = createContext(defaultAction);

export const TestContext = createContext(tests[0]);
export const TestsActionsContext = createContext(
    (() => {}) as Dispatch<Action>
);

export const SettingsContext = createContext(defaultSettings);
export const SettingsActionsContext = createContext(defaultAction);

const QuestionsProvider = ({ children }: any) => {
    const [settings, setSettings] = useState(defaultSettings);
    const [test, dispatch] = useReducer(reducer, tests[0]);

    return (
        // <SubjectsActionsContext.Provider value={defaultAction}>
        <SettingsActionsContext.Provider value={setSettings}>
            <TestsActionsContext.Provider value={dispatch}>
                <testsContext.Provider value={tests}>
                    <SettingsContext.Provider value={settings}>
                        <TestContext.Provider value={test}>
                            {children}
                        </TestContext.Provider>
                    </SettingsContext.Provider>
                </testsContext.Provider>
            </TestsActionsContext.Provider>
        </SettingsActionsContext.Provider>
        // </SubjectsActionsContext.Provider>
    );
};

export default QuestionsProvider;
