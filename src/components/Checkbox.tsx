import { useState, useId, ChangeEvent, useRef } from 'react';

interface CheckboxProps {
    defaultValue?: boolean;
    enabled?: boolean;
    onChange?: (value: boolean) => void;
    setToggle?: (e: Function) => void;
}
export default function Checkbox({
    defaultValue = false,
    enabled = true,
    onChange,
    setToggle,
    ...props
}: CheckboxProps) {
    const id = useId();
    const ref = useRef<HTMLInputElement>(null);

    const onchange = (evt: any) =>
        onChange ? onChange(evt.target?.checked || false) : null;
    const click = () => ref.current?.click();
    setToggle ? setToggle(click) : null;
    return (
        <label
            style={{}}
            htmlFor={id}
            className={`toggle-switch ${enabled ? '' : 'disabled'}`}
        >
            <input
                id={id}
                ref={ref}
                type="checkbox"
                onChange={onchange}
                disabled={!enabled}
                onClick={(e) => e.stopPropagation()}
                defaultChecked={defaultValue}
                {...props}
            />
            <span className="slider"></span>
        </label>
    );
}
