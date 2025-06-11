'use client';
import type { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import cn from 'clsx';

import styles from './textarea.module.css';

type TextareaProps = {
    name: string;
    rows?: number;
    label?: string;
    className?: string;
    disabled?: boolean;
    placeholder?: string;
    required?: boolean;
};

export const Textarea: FC<TextareaProps> = ({
    name,
    rows = 5,
    label = '',
    className = '',
    placeholder = '',
    disabled = false,
    required = false,
}) => {
    const { control, clearErrors } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
                const classes = cn({
                    [styles.disabled]: disabled,
                    [styles.required]: required,
                    [styles.error]: Boolean(error),
                    [className]: Boolean(className),
                });

                return (
                    <div className={classes}>
                        {label && (
                            <label className={styles.label} htmlFor={name}>
                                {label}
                            </label>
                        )}

                        <textarea
                            className={styles.input}
                            disabled={disabled}
                            id={name}
                            placeholder={placeholder}
                            rows={rows}
                            value={value}
                            onChange={(e) => {
                                clearErrors(name);
                                onChange(e);
                            }}
                        />
                    </div>
                );
            }}
        />
    );
};
