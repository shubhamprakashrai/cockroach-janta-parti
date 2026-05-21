import { ReactNode } from 'react';
import { cn } from '@/lib/utils'; // utility to merge classNames, you can implement simple version

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

const baseStyles = 'font-mono uppercase font-bold tracking-wide transition-all disabled:opacity-50 disabled:cursor-not-allowed';

const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-accent text-black border-4 border-black hover:bg-white hover:text-black shadow-[4px_4px_0_0_#000] hover:shadow-[8px_8px_0_0_#FFD60A] active:translate-y-0 active:shadow-none',
    secondary: 'bg-bg text-text-primary border-4 border-text-primary hover:bg-text-primary hover:text-black shadow-[4px_4px_0_0_#000]',
    ghost: 'bg-transparent text-accent border-0 hover:bg-accent/10 shadow-none',
    destructive: 'bg-alert text-white border-4 border-black hover:bg-white hover:text-alert shadow-[4px_4px_0_0_#000]',
};

const sizeStyles: Record<ButtonSize, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-4 text-base',
    lg: 'px-8 py-5 text-xl',
};

export default function Button({
    children,
    onClick,
    variant = 'primary',
    size = 'md',
    disabled = false,
    className = '',
    type = 'button',
}: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={cn(
                baseStyles,
                variantStyles[variant],
                sizeStyles[size],
                'transform active:scale-95',
                className
            )}
        >
            {children}
        </button>
    );
}
