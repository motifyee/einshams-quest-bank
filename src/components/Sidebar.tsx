import { Component, useContext } from 'react';
import {
    QuestionsActionsContext,
    SettingsContext,
    SubjectsContext,
} from '../lib/context';
import { push as Menu } from 'react-burger-menu';
import { SettingsActionsContext } from '../lib/context';
import Checkbox from './Checkbox';
import { selectAnswer, setQuestions, shuffleQuestions } from '../lib/reducer';

export default function Sidebar({
    questPanel,
}: {
    questPanel: React.RefObject<HTMLDivElement>;
}) {
    const settings = useContext(SettingsContext),
        setSettings = useContext(SettingsActionsContext),
        subjects = useContext(SubjectsContext),
        dispatchQuestions = useContext(QuestionsActionsContext);
    const { sidebarOn } = settings;

    const onClick = (action: string, value: string | boolean) => {
        switch (action) {
            case 'selectedSubject':
                questPanel.current?.scrollTo({ top: 0, behavior: 'smooth' });
                setSettings({
                    ...settings,
                    sidebarOn: false,
                    subject: value as string,
                    questions: subjects[value as string],
                });

                return dispatchQuestions(
                    setQuestions(
                        subjects[value as string],
                        settings.shuffleQuestions
                    )
                );
            case 'testModeOn':
                return setSettings({
                    ...settings,
                    testModeOn: value as boolean,
                });
            case 'correctAnswers':
                return setSettings({
                    ...settings,
                    correctAnswers: value as boolean,
                });
            case 'blurAnswers':
                return setSettings({
                    ...settings,
                    blurAnswers: value as boolean,
                });
            case 'shuffleQuestions':
                setSettings({
                    ...settings,
                    shuffleQuestions: value as boolean,
                });
                return dispatchQuestions(
                    shuffleQuestions(
                        [...subjects[settings.subject]],
                        value as boolean
                    )
                );

            case 'shuffleAnswers':
                return setSettings({
                    ...settings,
                    shuffleAnswers: value as boolean,
                });
            default:
                return;
        }
    };

    return (
        <div
            className="absolutez"
            // onPointerMove={(e) => e.stopPropagation()}
            // onPointerDown={(e) => e.stopPropagation()}
            // onPointerDownCapture={(e) => e.stopPropagation()}
            // onClick={() => setSettings({ ...settings, sidebarOn: false })}
            // className={`${sidebarOn ? '' : 'off'} sidebar-overlay`}
        >
            <nav
                onClick={(e) => e.stopPropagation()}
                className={`${sidebarOn ? '' : 'off'} sidebar`}
            >
                <div className="subjects">
                    {/* <div className="sep" /> */}
                    <h2 className="title">البنك</h2>
                    <div className="sep" />
                    {Object.keys(subjects).map((subjectName) => (
                        <div
                            key={subjectName}
                            className={`item ${
                                settings.subject === subjectName ? 'active' : ''
                            }`}
                            onClick={() =>
                                onClick('selectedSubject', subjectName)
                            }
                        >
                            {subjectName}
                        </div>
                    ))}
                </div>
                <div className="settings">
                    <div className="sep" />
                    <div className="title">الاعدادات</div>
                    <div className="sep" />
                    <SettingsItem
                        title="وضع الإختبار"
                        defaultValue={settings.testModeOn}
                        action={(v) => onClick('testModeOn', v)}
                    />
                    <SettingsItem
                        title="تصحيح الإجابات"
                        enabled={settings.testModeOn}
                        defaultValue={settings.correctAnswers}
                        action={(v) => onClick('correctAnswers', v)}
                    />
                    <p />
                    <SettingsItem
                        title="تغشية الإجابات"
                        enabled={!settings.testModeOn}
                        defaultValue={settings.blurAnswers}
                        action={(v) => onClick('blurAnswers', v)}
                    />
                    <SettingsItem
                        title="مزج الأسئلة"
                        defaultValue={settings.shuffleQuestions}
                        action={(v) => onClick('shuffleQuestions', v)}
                    />
                    {/* <SettingsItem
                        title="Shuffle Answers"
                        defaultValue={settings.shuffleAnswers}
                        action={(v) => onClick('shuffleAnswers', v)}
                    /> */}
                </div>
                <div className="credits">
                    <div className="sep" />
                    <div className="title">الحقوق</div>
                    <div className="sep" />
                    <div className="item">motifyee@gmail.com</div>
                    <div className="item">م/ مليك روماني</div>
                </div>
            </nav>
            <div
                onPointerMove={(e) => e.stopPropagation()}
                onPointerDownCapture={(e) => e.stopPropagation()}
                onPointerDown={(e) => e.stopPropagation()}
                onClick={() => setSettings({ ...settings, sidebarOn: false })}
                className={`${sidebarOn ? '' : 'off'} sidebar-overlay`}
            />
        </div>
    );
}

function SettingsItem({
    title,
    defaultValue,
    action,
    enabled = true,
}: {
    title: string;
    defaultValue: boolean;
    enabled?: boolean;
    action: (v: boolean) => void;
}) {
    let toggle: Function = () => {};
    const setToggle = (e: Function) => (toggle = e);
    return (
        <div
            onClick={(e) => {
                e.preventDefault();
                toggle();
            }}
            className="flex justify-between items-center item"
        >
            <div className={`${enabled ? '' : 'text-gray-500 xline-through'}`}>
                {title}
            </div>
            <Checkbox
                defaultValue={defaultValue}
                enabled={enabled}
                onChange={action}
                setToggle={setToggle}
            ></Checkbox>
        </div>
    );
}
