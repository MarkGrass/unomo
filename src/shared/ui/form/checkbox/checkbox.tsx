'use client';
import type { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import cn from 'clsx';

import { CheckIcon } from '@icons';

import styles from './checkbox.module.css';

type CheckboxProps = {
    name: string;
    label: string;
    className?: string;
};

export const Checkbox: FC<CheckboxProps> = ({ name, label, className = '' }) => {
    const { control, clearErrors } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            render={({
                field: { onChange, onBlur, value, ref },
                fieldState: { error },
            }) => {
                const classes = cn({
                    [styles.control]: true,
                    [styles.error]: Boolean(error),
                    [className]: Boolean(className),
                });

                return (
                    <label className={classes} htmlFor={name}>
                        <input
                            checked={Boolean(value)}
                            className={styles.input}
                            id={name}
                            ref={ref}
                            type="checkbox"
                            onBlur={onBlur}
                            onChange={(e) => {
                                onChange(e.target.checked);
                                clearErrors(name);
                            }}
                        />
                        <div className={styles.pointer} tabIndex={0}>
                            <CheckIcon height={16} width={16} />
                        </div>
                        <span className={styles.label}>{label}</span>
                    </label>
                );
            }}
        />
    );
};
