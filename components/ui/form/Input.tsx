import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface InputProps {
    id?: string;
    name?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    disabled?: boolean;
    className?: string;
}

export default function Input({
    id,
    name,
    placeholder = '',
    value,
    onChange,
    type = 'text',
    disabled = false,
    className = '',
}: InputProps) {
    return (
        <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={cn(
                'w-full bg-bg border-4 border-text-primary p-4 font-mono text-2xl uppercase text-rich-black placeholder-text-secondary focus:border-accent focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed',
                className
            )}
        />
    );
}
