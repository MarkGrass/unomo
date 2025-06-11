import type { FC } from 'react';

import Image from 'next/image';

import { SuccessImage } from '@assets';
import { ROUTES } from '@const/routes';
import { Button } from '@ui';

import styles from './Confirm.module.css';

export const Confirm: FC = () => {
    return (
        <section className={styles.confirm}>
            <div className={styles.wrapper}>
                <Image
                    alt="Оплата прошла успешно"
                    className={styles.illustration}
                    src={SuccessImage}
                />
                <h1 className={styles.head}>
                    Благодарим Вас за обращение в Unomo! <br />
                    Мы свяжемся с Вами в ближайшее время
                </h1>
                <p className={styles.message}>
                    Мы на связи с 09:00 до 20:00, с понедельника по субботу.
                    <br className="break" />
                    &nbsp; Если вы оставили заявку вне этого времени — не волнуйтесь: мы
                    перезвоним при первой возможности в рабочие часы. Обычно отвечаем в
                    течение 5 минут.
                    <br />
                    <br />
                    Если вопрос срочный — позвоните нам напрямую
                </p>

                <Button className={styles.action} href={ROUTES.ROOT}>
                    Вернуться на главную
                </Button>
            </div>
        </section>
    );
};
