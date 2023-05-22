// import { Dispatch, SetStateAction, useState } from 'react';

import { useDebugValue, useState } from 'react';

const ids: { [key: string]: { captured: boolean; skip?: boolean } } = {};

type Skip = () => boolean;

/**
 * Once the component renders|re-renders, `useCaptureUpdate` sets a boolean
 * state—on the component `isCaptured`—to true for a short time (100ms by default).
 *
 * This allows you to perform an action once the component renders|re-renders.
 *
 * Calling skip() will skip capturing the re-render, usually used after state update.
 *
 * Usage:
 * ```
 * 	const [isCaptured, skip] = useCaptureUpdate('unique-id', ()=>console.log('captured'), true, 100);
 * 	captureUpdate(captureState, setCaptureState, onceAction);
 *
 * @param id unique id for the component
 * @param onceAction action to perform once the component renders|re-renders
 * @param actionSkippable if true, the action can be skipped in skipped render cycles
 * @param releaseTimeout time in ms to reset the capture state to false
 * @returns [isCaptured, skip]
 * ```
 */
function useCaptureUpdate(
    id: string,
    onceAction: () => void,
    actionSkippable = true,
    releaseTimeout = 100
): [boolean, Skip] {
    useDebugValue(ids);

    const [isCaptured, setCaptured] = useState(false);

    const capturedInCache = (value?: boolean): boolean =>
        (ids[id] = {
            ...ids[id],
            captured: value ?? ids[id]?.captured ?? false,
        }).captured;

    (() => {
        if (isCaptured || capturedInCache()) return;
        if (onceAction && !actionSkippable) onceAction();
        if (ids[id].skip) return;
        if (onceAction && actionSkippable) onceAction();

        setCaptured(() => capturedInCache(true));
        setTimeout(() => setCaptured(false), releaseTimeout);
    })();

    if (!isCaptured && capturedInCache()) capturedInCache(false);

    const skip = () => (id in ids ? (ids[id].skip = true) : false);

    return [isCaptured, skip];
}

export default useCaptureUpdate;
