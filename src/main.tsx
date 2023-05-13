import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/App.css';
import QuestionsProvider from './lib/context';
import Topbar from './components/Topbar';
import Bottombar from './components/Bottombar';
import Questions from './components/Questions';
import Sidebar from './components/Sidebar';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
    // <React.StrictMode>
    <QuestionsProvider>
        <Topbar />
        <Sidebar />

        <Questions />

        <Bottombar />
    </QuestionsProvider>
    // </React.StrictMode>,
);
