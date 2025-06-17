'use client';
import type { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import cn from 'clsx';
import Link from 'next/link';

import { Button, Checkbox, Input, PhoneInput, Textarea } from '@ui';

import type { RequestFields } from './request.schema';
import { requestResolver } from './request.schema';

import styles from './Application.module.css';

export const Application: FC = () => {
    const methods = useForm<RequestFields>({
        defaultValues: {
            name: '',
            phone: '',
            message: '',
            agreement: false,
        },
        resolver: requestResolver,
    });

    const { handleSubmit } = methods;

    const onSubmit = async (data: RequestFields) => {
        const requestData = JSON.stringify(data);

        await Promise.all([
            fetch('/api/send-lead', {
                method: 'POST',
                body: requestData,
            }),
            fetch('/api/send-email', {
                method: 'POST',
                body: requestData,
            }),
            fetch('/api/send-tg', {
                method: 'POST',
                body: requestData,
            }).then((r) => r.json()),
        ]).then(() => {
            window.location.href = '/confirm';
        });
    };

    return (
        <section className={styles.application} id="application">
            <h2 className={styles.header}>
                Расскажите, что случилось —<br className="break-d" />
                поможем разобраться!
            </h2>

            <p className={styles.description}>
                Заполните короткую форму — юрист свяжется с вами в ближайшее время
            </p>

            <FormProvider {...methods}>
                <form
                    className={styles.form}
                    id="communication-form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Input
                        required
                        className={cn(styles.control, styles.name)}
                        label="Имя"
                        name="name"
                        placeholder="Как к вам обращаться?"
                    />
                    <PhoneInput
                        required
                        className={cn(styles.control, styles.phone)}
                        label="Телефон"
                        name="phone"
                        placeholder="Ваш номер телефона"
                    />
                    <Textarea
                        className={cn(styles.control, styles.message)}
                        label="Опишите ситуацию"
                        name="message"
                        placeholder="Опишите ситуацию"
                    />
                    <Checkbox
                        className={cn(styles.control, styles.agreement)}
                        label={
                            <>
                                Я даю согласие на{' '}
                                <Link href="/soglasie_na_obrabotku.pdf" target="_blank">
                                    обработку персональных данных
                                </Link>
                            </>
                        }
                        name="agreement"
                    />

                    <Button
                        className={styles.action}
                        form="communication-form"
                        type="submit"
                    >
                        Задать вопрос
                    </Button>
                </form>
            </FormProvider>
        </section>
    );
};
