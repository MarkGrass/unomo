import { FC } from 'react';
import styles from './Success.module.css';
import Image from 'next/image';
import { SuccessImage } from '@assets';
import { Button } from '@ui';

export const Success: FC = () => {
    return (
        <section className={styles.success}>
            <div className={styles.wrapper}>
                <Image
                    className={styles.illustration}
                    src={SuccessImage}
                    alt="Оплата прошла успешно"
                />

                <h1 className={styles.head}>
                    Мы получили Вашу оплату по договору.
                    <br />
                    Спасибо за доверие!
                </h1>

                <p className={styles.message}>
                    Если для оказания услуги потребуется дополнительное согласование — мы
                    обязательно свяжемся с вами в ближайшее время. Если ваш вопрос
                    срочный, вы можете связаться с нами напрямую по телефону.
                </p>

                <Button className={styles.action} href="/">
                    Вернуться на главную
                </Button>
            </div>
        </section>
    );
};
