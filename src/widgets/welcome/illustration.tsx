'use client';
import { FC } from 'react';
import { MarkIcon } from '@icons';
import Image from 'next/image';
import { WelcomeImage } from '@assets';
import { useResize } from '@hooks';
import cn from 'clsx';
import styles from './illustration.module.css';

export const Illustration: FC = () => {
    const { isMobile } = useResize();

    return (
        <div className={styles.welcome} role="img" aria-label="Результаты работы Unomo">
            <MarkIcon className={styles.marker} />

            <Image
                priority
                src={WelcomeImage}
                alt=""
                width={isMobile ? 375 : 648}
                height={isMobile ? 330 : 570}
            />

            <div className={cn(styles.stats, styles.clients)}>
                <span className={styles.title}>500+</span>
                <span className={styles.description}>Довольных клиентов</span>
            </div>

            <div className={cn(styles.stats, styles.cases)}>
                <div className={styles.title}>98%</div>
                <div className={styles.description}>Успешных дел</div>
            </div>
        </div>
    );
};
