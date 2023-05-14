import { useContext } from 'react';
import burger from '../assets/burger.svg';
import { SettingsActionsContext, SettingsContext } from '../lib/context';

console.log(burger);
function Topbar() {
    const settings = useContext(SettingsContext);
    const setSettings = useContext(SettingsActionsContext);
    function toggleMenu() {
        setSettings({ ...settings, sidebarOn: !settings.sidebarOn });
    }
    return (
        <div className="burger-btn sticky z-10 top-0 min-h-[50px] px-4 flex items-center justify-between bg-green-700 ">
            <div className="topbar__left">
                <img
                    className="cursor-pointer"
                    onClick={toggleMenu}
                    src={burger}
                    alt="Menu"
                />
            </div>
            <div className="text-slate-200 text-xl"> --{settings.subject}</div>
            <div className="">{/* <img src={burger} alt="Menu" /> */}</div>
        </div>
    );
}

export default Topbar;
