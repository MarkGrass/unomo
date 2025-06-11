'use client';
import type { FC } from 'react';

import { ROUTES } from '@const/routes';
import { Button } from '@ui';
import { Services } from '@widgets/services';
import { Stats } from '@widgets/stats';

import { Illustration } from './illustration';

import styles from './Welcome.module.css';

export const Welcome: FC = () => {
    return (
        <>
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
                            <Button className={styles.action} href={ROUTES.APPLICATION}>
                                Получить консультацию
                            </Button>
                            <Button
                                className={styles.action}
                                color="secondary"
                                href={ROUTES.PAYMENT_FROM}
                                variant="outline"
                            >
                                Быстрая оплата
                            </Button>
                        </div>
                    </article>
                </div>
            </section>
            <Stats />
            <Services />
        </>
    );
};
