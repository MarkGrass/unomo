'use client';
import type { FC } from 'react';

import cn from 'clsx';
import Image from 'next/image';

import { WelcomeImage } from '@assets';
import { useResize } from '@hooks';
import { MarkIcon } from '@icons';

import styles from './illustration.module.css';

export const Illustration: FC = () => {
    const { isMobile } = useResize();

    return (
        <div aria-label="Результаты работы Unomo" className={styles.welcome} role="img">
            <MarkIcon className={styles.marker} />

            <Image
                priority
                alt=""
                height={isMobile ? 330 : 570}
                src={WelcomeImage}
                width={isMobile ? 375 : 648}
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
