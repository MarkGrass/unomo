import type { FC } from 'react';

import Image from 'next/image';

import { SuccessImage } from '@assets';
import { ROUTES } from '@const/routes';
import { Button } from '@ui';

import styles from './Success.module.css';

export const Success: FC = () => {
    return (
        <section className={styles.success}>
            <div className={styles.wrapper}>
                <Image
                    alt="Оплата прошла успешно"
                    className={styles.illustration}
                    src={SuccessImage}
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

                <Button className={styles.action} href={ROUTES.ROOT}>
                    Вернуться на главную
                </Button>
            </div>
        </section>
    );
};
