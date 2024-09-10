import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/App.css';
import { useEffect } from 'react';
import { saveAction } from './actions-reg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { LoaderIO } from './pages/Loaderio';

// (window||globalThis||this)['l'] = console.log;
const root = document.getElementById('root') as HTMLElement;

function App() {
    useEffect(() => {
        if (!window.location.href.includes('http://localhost')) saveAction();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/loader.io" element={<LoaderIO />} />
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.createRoot(root).render(
    // <React.StrictMode>
    <App />
    // </React.StrictMode>,
);
