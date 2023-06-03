import { useEffect } from 'react';
import burger from '/assets/burger.svg';
import { useSettingsStore } from '../lib/store';

function Header() {
    const update = useSettingsStore((s) => s.update),
        title = useSettingsStore((s) => s.activeTestId);

    useEffect(() => {
        console.log('installed kepress listener @Header');
        // root.addEventListener('contextmenu', (e) => e.preventDefault());
        document.addEventListener('keypress', (e) => {
            // console.log('pressed code:', e.code, 'pressed key:', e.key);
            if (e.key === 'a') update('sidebarOn', (v: any) => !v);
            else if (e.key === 's') update('shuffleQuestions', (v: any) => !v);
            else if (e.key === 'c') update('blurAnswers', (v: any) => !v);
            else if (e.key === 'q') update('testModeOn', (v: any) => !v);
            else if (e.key === 'w') update('correctAnswers', (v: any) => !v);
            else if (e.code === 'Space') {
                update('sidebarOn', false);
                update('shuffleQuestions', false);
                update('blurAnswers', false);
                update('testModeOn', false);
                update('correctAnswers', false);
            }
            e.preventDefault();
        });
    }, []);
    return (
        <div className="burger-btn sticky top-0 min-h-[50px] px-4 flex items-center justify-between bg-green-700 ">
            <div>
                {/* <button> */}
                <img
                    className="cursor-pointer"
                    onClick={() => update('sidebarOn', true)}
                    src={burger}
                    alt="Menu"
                />
            </div>
            <div className="text-slate-200 border-double border-b-4 text-xl cursor-pointer">
                {title}
            </div>
            <div />
        </div>
    );
}

export default Header;
