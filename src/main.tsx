import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/App.css';
import QuestionsProvider from './lib/context';
import Header from './components/Header';
import Bottombar from './components/Bottombar';
import Questions from './components/Questions';
import Sidebar from './components/Sidebar';
import { useEffect, useRef } from 'react';
import { delMyIdLogs, saveAction } from './actions-reg';

const root = document.getElementById('root') as HTMLElement;

function App() {
    const questPanelRef = useRef(null);
    useEffect(() => {
        (async () => {
            // await delMyIdLogs();
            await saveAction();
        })();
    }, []);

    return (
        <QuestionsProvider>
            <Header />
            <Sidebar questPanel={questPanelRef} />

            <Questions questPanel={questPanelRef} />

            <Bottombar />
        </QuestionsProvider>
    );
}

ReactDOM.createRoot(root).render(
    // <React.StrictMode>
    <App />
    // </React.StrictMode>,
);

/**
 git remote set-url origin git@motifyee:motifyee/einshams-quest-bank
    

    * ssh-keygen -t ed25519 -C "motifyee@gmail.com"
    * ssh-keygen -t ed25519 -C "mrt.tarabia@gmail.com"

    * ssh-add ~/.ssh/motifyee-github
    * ssh-add ~/.ssh/mrt-web-github
    
    * ssh-add -l # to list identities
    * ssh-add -D # to remove all identities

 
    *  ~/.ssh/config:

        Host git.motifyee
            HostName github.com
            IdentityFile ~/.ssh/motifyee-github
            IdentitiesOnly yes
        Host mrt-web
            HostName github.com
            IdentityFile ~/.ssh/mrt-web-github
            IdentitiesOnly yes

 *  */
