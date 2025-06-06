'use client';
import type { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import cn from 'clsx';

import styles from './checkbox.module.css';
import { CheckIcon } from '@icons';

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
                            id={name}
                            checked={Boolean(value)}
                            className={styles.input}
                            ref={ref}
                            type="checkbox"
                            onBlur={onBlur}
                            onChange={(e) => {
                                onChange(e.target.checked);
                                clearErrors(name);
                            }}
                        />
                        <div className={styles.pointer} tabIndex={0}>
                            <CheckIcon width={16} height={16} />
                        </div>
                        <span className={styles.label}>
                            {label}
                        </span>
                    </label>
                );
            }}
        />
    );
};
