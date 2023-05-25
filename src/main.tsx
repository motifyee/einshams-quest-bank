import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/App.css';
import QuestionsProvider from './lib/context';
import Header from './components/Header';
import Bottombar from './components/Bottombar';
import Test from './components/Test';
import Sidebar from './components/Sidebar';
import { useEffect, useRef } from 'react';
import { saveAction } from './actions-reg';
import ScrollTopButton from './components/ScrollTopButton';

// (window||globalThis||this)['l'] = console.log;

function App() {
    const questPanelRef = useRef(null);
    useEffect(() => {
        if (!window.location.href.includes('http://localhost')) saveAction();
    }, []);

    return (
        <QuestionsProvider>
            <Header />
            <Sidebar questPanel={questPanelRef} />

            <Test questPanel={questPanelRef} />
            <ScrollTopButton questPanel={questPanelRef} />

            <Bottombar />
        </QuestionsProvider>
    );
}

const root = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(root).render(
    // <React.StrictMode>
    <App />
    // </React.StrictMode>,
);
