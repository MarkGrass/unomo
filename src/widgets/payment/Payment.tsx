import type { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import cn from 'clsx';
import Image from 'next/image';

import { PaymentImage } from '@assets';
import { Button, Input, PhoneInput } from '@ui';

import type { PaymentFields } from './payment.schema';
import { paymentResolver } from './payment.schema';

import styles from './Payment.module.css';

export const Payment: FC = () => {
    const methods = useForm<PaymentFields>({
        defaultValues: {
            firstname: '',
            lastname: '',
            patronymic: '',
            contract: '',
            phone: '',
            amount: null,
        },
        resolver: paymentResolver,
    });
    const { handleSubmit } = methods;

    const onSubmit = (values: PaymentFields) => {
        console.log(values);
    };

    return (
        <section className={styles.payment}>
            <FormProvider {...methods}>
                <form
                    className={styles.form}
                    id="payment-form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Input
                        required
                        className={cn(styles.control, styles.name)}
                        label="Фамилия"
                        name="firstname"
                        placeholder="Фамилия"
                    />
                    <Input
                        required
                        className={cn(styles.control, styles.name)}
                        label="Имя"
                        name="lastname"
                        placeholder="Имя"
                    />
                    <Input
                        required
                        className={cn(styles.control, styles.name)}
                        label="Отчество"
                        name="patronymic"
                        placeholder="Отчество"
                    />
                    <Input
                        className={cn(styles.control, styles.name)}
                        label="Номер договора"
                        name="contract"
                        placeholder="Номер договора"
                    />
                    <PhoneInput
                        required
                        className={cn(styles.control, styles.phone)}
                        label="Телефон"
                        name="phone"
                        placeholder="Телефон"
                    />
                    <Input
                        required
                        className={cn(styles.control, styles.phone)}
                        label="Сумма в рублях"
                        name="amount"
                        placeholder="Сумма в рублях"
                        type="number"
                    />

                    <Button className={styles.action} form="payment-form" type="submit">
                        Оплатить
                    </Button>
                </form>
            </FormProvider>

            <div className={styles.info}>
                <p className={styles.commission}>С учетом комиссии 0 ₽</p>
                <p>
                    Комиссия взимается платежной системой. Для оплаты без комиссии вы
                    можете воспользоваться QR кодом, расположенным на последней странице
                    вашего договора
                </p>
                <p>
                    Если при оплате из Сбербанка у вас возникают ошибки, воспользуйтесь
                    переводом по реквизитам на наш специальный счет в Сбербанке
                </p>
            </div>

            <details className={styles.legalAddress}>
                <summary>
                    <span className={styles.open}>Показать реквизиты</span>
                    <span className={styles.close}>Скрыть реквизиты</span>
                </summary>
                <p className={styles.group}>Получатель</p>
                <p>
                    <span className={styles.label}>Наименование</span>
                    <span className={styles.value}>
                        ИНДИВИДУАЛЬНЫЙ ПРЕДПРИНИМАТЕЛЬ ГЛАЗЫРИН ЕГОР ВЛАДИМИРОВИЧ
                    </span>
                </p>
                <p>
                    <span className={styles.label}>ИНН</span>
                    <span className={styles.value}>741307647394</span>
                </p>
                <p>
                    <span className={styles.label}>ОГРНИП</span>
                    <span className={styles.value}>323508100514648</span>
                </p>
                <p>
                    <span className={styles.label}>Расчетный счет</span>
                    <span className={styles.value}>40802810800005257802</span>
                </p>
                <p className={styles.group}>Банк получателя</p>
                <p>
                    <span className={styles.label}>Наименование</span>
                    <span className={styles.value}>Банк АО «ТБанк»</span>
                </p>
                <p>
                    <span className={styles.label}>БИК</span>
                    <span className={styles.value}>044525974</span>
                </p>
                <p>
                    <span className={styles.label}>Корсчёт</span>
                    <span className={styles.value}>30101810145250000974</span>
                </p>
                <p>
                    <span className={styles.label}>ИНН</span>
                    <span className={styles.value}>7710140679</span>
                </p>

                <Image
                    alt="Payment QR Code"
                    className={styles.qrcode}
                    src={PaymentImage}
                />
            </details>
        </section>
    );
};
