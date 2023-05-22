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
            if (!window.location.href.includes('http://localhost'))
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
