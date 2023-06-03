import {
    useSidebarOn,
    useSetSidebarOn,
    useSetActiveTestId,
    useSetTestModeOn,
    useSetCorrectAnswers,
    useSetBlurAnswers,
    useSetShuffleQuestions,
    useTestModeOn,
    useGetAllTests,
    useActiveTestId,
    useCorrectAnswers,
    useBlurAnswers,
    useShuffleQuestions,
} from '../lib/context';
import { useSettingsStore } from '../lib/store';
import Checkbox from './Checkbox';

export default function Sidebar({
    questPanel,
}: {
    questPanel: React.RefObject<HTMLDivElement>;
}) {
    const tests = useGetAllTests()();
    const {
        sidebarOn,
        correctAnswers,
        blurAnswers,
        shuffleQuestions,
        activeTestId,
        testModeOn,
        update,
    } = useSettingsStore();

    const onClick = (action: string, value: string | boolean | number) => {
        switch (action) {
            case 'selectedSubject':
                update('activeTestId', value as string);
                questPanel.current?.scrollTo({ top: 0, behavior: 'smooth' });
                return update('sidebarOn', false);
            case 'testModeOn':
                return update('testModeOn', value as boolean);
            case 'correctAnswers':
                return update('correctAnswers', value as boolean);
            case 'blurAnswers':
                return update('blurAnswers', value as boolean);
            case 'shuffleQuestions':
                return update('shuffleQuestions', value as boolean);
            // return dispatchQuestions(shuffleTest(value as boolean));

            // case 'shuffleQuestions':
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
                <h2 className="title">البنك</h2>
                <div className="subjects">
                    {/* <div className="sep" /> */}
                    <div className="sep" />
                    {tests.map((t) => (
                        <div
                            key={t.id}
                            className={`item ${
                                activeTestId === t.id ? 'active' : ''
                            }`}
                            onClick={() => onClick('selectedSubject', t.id)}
                        >
                            {t.title}
                        </div>
                    ))}
                </div>
                <div className="settings">
                    <div className="sep" />
                    <div className="title">الاعدادات</div>
                    <div className="sep" />
                    <SettingsItem
                        title="وضع الإختبار"
                        defaultValue={testModeOn}
                        action={(v) => onClick('testModeOn', v)}
                    />
                    <SettingsItem
                        title="تصحيح الإجابات"
                        enabled={testModeOn}
                        defaultValue={correctAnswers}
                        action={(v) => onClick('correctAnswers', v)}
                    />
                    <p />
                    <SettingsItem
                        title="تغشية الإجابات"
                        enabled={!testModeOn}
                        defaultValue={blurAnswers}
                        action={(v) => onClick('blurAnswers', v)}
                    />
                    <SettingsItem
                        title="مزج الأسئلة"
                        defaultValue={shuffleQuestions}
                        action={(v) => onClick('shuffleQuestions', v)}
                    />
                    {/* <SettingsItem
                        title="Shuffle Answers"
                        defaultValue={shuffleQuestions}
                        action={(v) => onClick('shuffleQuestions', v)}
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
                onClick={() => update('sidebarOn', false)}
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
