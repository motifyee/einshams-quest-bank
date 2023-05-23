import {
    Dispatch,
    SetStateAction,
    createContext,
    useReducer,
    useState,
} from 'react';
import { Action, reducer } from './reducer';
import ITQuestions1 from '../fetches/international-trade-1';
import { defaultSettings } from './settings';
import { subjects } from './subjects';
// import ITQuestions2 from '../fetches/ITQuestions2';
const defaultAction: Dispatch<SetStateAction<Settings>> = () => {};
// | Dispatch<SetStateAction<Question[]>>

export const SubjectsContext = createContext(subjects);
// export const SubjectsActionsContext = createContext(defaultAction);

export const QuestionsContext = createContext([] as SelectionQuestion[]);
export const QuestionsActionsContext = createContext(
    (() => {}) as Dispatch<Action>
);

export const SettingsContext = createContext(defaultSettings);
export const SettingsActionsContext = createContext(defaultAction);

const QuestionsProvider = ({ children }: any) => {
    const [settings, setSettings] = useState(defaultSettings);
    const [questions, dispatch] = useReducer(reducer, []);

    return (
        // <SubjectsActionsContext.Provider value={defaultAction}>
        <SettingsActionsContext.Provider value={setSettings}>
            <QuestionsActionsContext.Provider value={dispatch}>
                <SubjectsContext.Provider value={subjects}>
                    <SettingsContext.Provider value={settings}>
                        <QuestionsContext.Provider value={questions}>
                            {children}
                        </QuestionsContext.Provider>
                    </SettingsContext.Provider>
                </SubjectsContext.Provider>
            </QuestionsActionsContext.Provider>
        </SettingsActionsContext.Provider>
        // </SubjectsActionsContext.Provider>
    );
};

export default QuestionsProvider;
