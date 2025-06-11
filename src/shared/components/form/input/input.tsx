'use client';
import type { FC } from 'react';
import type { ControllerFieldState, ControllerRenderProps } from 'react-hook-form';
import { Controller, useFormContext } from 'react-hook-form';

import cn from 'clsx';

import styles from './input.module.css';

type InputType = 'text' | 'number';

type InputProps = {
    name: string;
    label?: string;
    type?: InputType;
    disabled?: boolean;
    placeholder?: string;
    required?: boolean;
    className?: string;
};

export const Input: FC<InputProps> = ({
    name,
    required = false,
    disabled = false,
    label = '',
    placeholder = '',
    type = 'text',
    className = '',
}) => {
    const { control, clearErrors } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            render={({
                field: { onChange, value, ref },
                fieldState: { error },
            }: {
                field: ControllerRenderProps;
                fieldState: ControllerFieldState;
            }) => {
                const classes = cn({
                    [styles.required]: required,
                    [styles.error]: Boolean(error),
                    [styles.disabled]: disabled,
                    [className]: Boolean(className),
                });

                return (
                    <div className={classes}>
                        {label && (
                            <label className={styles.label} htmlFor={name}>
                                {label}
                            </label>
                        )}
                        <input
                            className={styles.input}
                            disabled={disabled}
                            id={name}
                            placeholder={placeholder}
                            ref={ref}
                            type={type}
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
