import { useState, useId, ChangeEvent } from 'react';

interface CheckboxProps {
    defaultValue?: boolean;
    enabled?: boolean;
    onChange: (value: boolean) => void;
}
export default function Checkbox({
    defaultValue = false,
    enabled = true,
    onChange,
    ...props
}: CheckboxProps) {
    const id = useId();

    const toggle = (evt: any) =>
        onChange ? onChange(evt.target?.checked || false) : null;

    return (
        <label
            style={{}}
            htmlFor={id}
            className={`toggle-switch ${enabled ? '' : 'disabled'}`}
        >
            <input
                {...props}
                type="checkbox"
                onChange={toggle}
                id={id}
                disabled={!enabled}
                defaultChecked={defaultValue}
            />
            <span className="slider"></span>
        </label>
    );
}
