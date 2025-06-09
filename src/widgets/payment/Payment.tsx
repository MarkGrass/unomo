import { FC } from 'react';
import Image from 'next/image';
import { FormProvider, useForm } from 'react-hook-form';
import { PaymentFields, paymentResolver } from './payment.schema';
import styles from './Payment.module.css';
import { Button, Input, PhoneInput } from '@ui';
import cn from 'clsx';
import { PaymentImage } from '@assets';

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
                    id="payment-form"
                    className={styles.form}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Input
                        className={cn(styles.control, styles.name)}
                        required
                        label="Фамилия"
                        placeholder="Фамилия"
                        name="firstname"
                    />
                    <Input
                        className={cn(styles.control, styles.name)}
                        required
                        label="Имя"
                        placeholder="Имя"
                        name="lastname"
                    />
                    <Input
                        className={cn(styles.control, styles.name)}
                        required
                        label="Отчество"
                        placeholder="Отчество"
                        name="patronymic"
                    />
                    <Input
                        className={cn(styles.control, styles.name)}
                        label="Номер договора"
                        placeholder="Номер договора"
                        name="contract"
                    />
                    <PhoneInput
                        className={cn(styles.control, styles.phone)}
                        required
                        label="Телефон"
                        placeholder="Телефон"
                        name="phone"
                    />
                    <Input
                        className={cn(styles.control, styles.phone)}
                        required
                        type="number"
                        label="Сумма в рублях"
                        placeholder="Сумма в рублях"
                        name="amount"
                    />

                    <Button form="payment-form" className={styles.action} type="submit">
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
                    className={styles.qrcode}
                    alt="Payment QR Code"
                    src={PaymentImage}
                />
            </details>
        </section>
    );
};
