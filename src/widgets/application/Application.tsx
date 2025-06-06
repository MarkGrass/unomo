'use client';
import { FC } from 'react';
import styles from './Application.module.css';
import { Button, Checkbox, Input, PhoneInput, Textarea } from '@ui';
import { FormProvider, useForm } from 'react-hook-form';
import { RequestFields } from './request.schema';
import { requestResolver } from '@widgets/application/request.schema';
import cn from 'clsx';

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

    const onSubmit = (values: RequestFields) => {
        console.log(values);
    };

    return (
        <section className={styles.application}>
            <h2 className={styles.header}>
                Расскажите, что случилось —<br className={styles.break} />
                поможем разобраться!
            </h2>
            <p className={styles.description}>
                Заполните короткую форму — юрист свяжется с вами в ближайшее время
            </p>

            <FormProvider {...methods}>
                <form id="communication-form" className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        className={cn(styles.control, styles.name)}
                        required
                        label="Имя"
                        placeholder="Как к вам обращаться?"
                        name="name"
                    />
                    <PhoneInput
                        className={cn(styles.control, styles.phone)}
                        required
                        label="Телефон"
                        placeholder="Ваш номер телефона"
                        name="phone"
                    />
                    <Textarea
                        className={cn(styles.control, styles.message)}
                        label="Опишите ситуацию"
                        placeholder="Опишите ситуацию"
                        name="message"
                    />
                    <Checkbox
                        className={cn(styles.control, styles.agreement)}
                        label="Я даю согласие на обработку персональных данных"
                        name="agreement"
                    />

                    <Button form="communication-form" className={styles.action} type="submit">
                        Задать вопрос
                    </Button>
                </form>
            </FormProvider>
        </section>
    );
};
