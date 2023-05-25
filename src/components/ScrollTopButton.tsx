import { useContext, useState } from 'react';
import { SettingsContext } from '../lib/context';

export default function ScrollTopButton({
    questPanel,
}: {
    questPanel: React.RefObject<HTMLDivElement>;
}) {
    const settings = useContext(SettingsContext);

    const raise = settings.testModeOn && settings.correctAnswers ? 'raise' : '',
        show = !settings.sidebarOn ? '' : 'none';

    const [hover, setHover] = useState('');

    return (
        <div
            className={`scroll-top ${raise} ${show} ${hover}`}
            onClick={() =>
                questPanel.current?.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                })
            }
            onPointerMoveCapture={() => setHover('hover')}
            onPointerDownCapture={() => setHover('hover')}
            // onPointerLeaveCapture={() => setHover('')}
            onPointerOutCapture={() => setHover('')}
            onPointerUp={() => setHover('')}
        />
    );
}
