'use client';
import { FC } from 'react';
import { withMask } from 'use-mask-input';
import cn from 'clsx';
import { Controller, useFormContext } from 'react-hook-form';
import styles from './phone-input.module.css';

type PhoneInputProps = {
    name: string;
    className?: string;
    label?: string;
    mask?: string;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
};

export const PhoneInput: FC<PhoneInputProps> = ({
    name = '',
    className = '',
    label = '',
    mask = '+9 (999) 999-99-99',
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

                        <input
                            id={name}
                            className={styles.input}
                            disabled={disabled}
                            placeholder={placeholder}
                            ref={withMask(mask || 'numeric') as never}
                            type="text"
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
