import { useRef } from 'react';
import Bottombar from '../components/Bottombar';
import Header from '../components/Header';
import ScrollTopButton from '../components/ScrollTopButton';
import Sidebar from '../components/Sidebar';
import Test from '../components/Test';
import QuestionsProvider from '../lib/context';

export const Home = () => {
    const questPanelRef = useRef(null);
    return (
        <QuestionsProvider>
            <Header />
            <Sidebar questPanel={questPanelRef} />

            <Test questPanel={questPanelRef} />
            <ScrollTopButton questPanel={questPanelRef} />

            <Bottombar />
        </QuestionsProvider>
    );
};
