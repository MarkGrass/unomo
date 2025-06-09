"use client";
import type { FC, PropsWithChildren, ReactNode } from 'react';
import cn from 'clsx';
import styles from './button.module.css';
import Link from 'next/link';

export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonVariant = 'default' | 'outline' | 'ghost';
export type ButtonColor = 'primary' | 'secondary';
export type ButtonType = HTMLButtonElement['type'];

export type ButtonProps = {
    href?: string;
    form?: string;
    className?: string;
    disabled?: boolean;
    type?: ButtonType;
    color?: ButtonColor;
    size?: ButtonSize;
    variant?: ButtonVariant;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    onClick?: () => void;
    [key: string]: unknown;
};

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
    href = '',
    form = '',
    className = '',
    disabled = false,
    type = 'button',
    color = 'primary',
    variant = 'default',
    size = 'md',
    iconLeft = null,
    iconRight = null,
    onClick,
    children,
    ...rest
}) => {
    const classes = cn({
        [styles.button]: true,
        [styles.disabled]: disabled,
        [styles[color]]: true,
        [styles[size]]: true,
        [styles[variant]]: true,
        [className]: Boolean(className),
    });

    if (href) {
        return (
            <Link aria-disabled={disabled} href={href} className={classes}>
                {iconLeft}
                {children}
                {iconRight}
            </Link>
        );
    }

    return (
        <button
            type={type}
            form={form}
            disabled={disabled}
            className={classes}
            onClick={onClick}
            {...rest}
        >
            {iconLeft}
            {children}
            {iconRight}
        </button>
    );
};
