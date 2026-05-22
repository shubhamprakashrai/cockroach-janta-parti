import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TextareaProps {
    id?: string;
    name?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    rows?: number;
    disabled?: boolean;
    className?: string;
}

export default function Textarea({
    id,
    name,
    placeholder = '',
    value,
    onChange,
    rows = 4,
    disabled = false,
    className = '',
}: TextareaProps) {
    return (
        <textarea
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            rows={rows}
            disabled={disabled}
            className={cn(
                'w-full bg-bg border-4 border-text-primary p-4 font-mono text-2xl uppercase text-rich-black placeholder-text-secondary focus:border-accent focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed resize-none',
                className
            )}
        />
    );
}
