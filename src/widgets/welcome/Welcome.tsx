'use client';
import type { FC } from 'react';
import { Button } from '@ui';
import styles from './Welcome.module.css';

import { Illustration } from './illustration';

export const Welcome: FC = () => {
    return (
        <section className={styles.main}>
            <div className={styles.wrapper}>
                <Illustration />

                <article className={styles.info}>
                    <h1 className={styles.title}>
                        Оказание
                        <br />
                        юридической помощи
                    </h1>

                    <p className={styles.description}>
                        Дадим чёткий план действий и начнём помогать уже с первой
                        консультации - без лишних затрат и потери времени!
                    </p>

                    <div className={styles.actions}>
                        <Button href="#application" className={styles.action}>
                            Получить консультацию
                        </Button>
                        <Button href="/payment" className={styles.action} variant="outline">
                            Быстрая оплата
                        </Button>
                    </div>
                </article>
            </div>
        </section>
    );
};
