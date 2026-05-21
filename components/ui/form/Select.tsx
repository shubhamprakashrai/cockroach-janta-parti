import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SelectProps {
    id?: string;
    name?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string; label: string }[];
    disabled?: boolean;
    className?: string;
}

export default function Select({
    id,
    name,
    value,
    onChange,
    options,
    disabled = false,
    className = '',
}: SelectProps) {
    return (
        <select
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={cn(
                'w-full bg-bg border-4 border-text-primary p-4 font-mono text-2xl uppercase text-white focus:border-accent focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed',
                className
            )}
        >
            {options.map(opt => (
                <option key={opt.value} value={opt.value} className="bg-bg text-white">
                    {opt.label}
                </option>
            ))}
        </select>
    );
}
