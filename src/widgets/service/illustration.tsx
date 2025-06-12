'use client';
import type { FC } from 'react';

import cn from 'clsx';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

import { MarkIcon } from '@icons';

import styles from './illustration.module.css';

type IllustrationProps = {
    meta: string;
    src: StaticImageData;
};

export const Illustration: FC<IllustrationProps> = ({ src, meta = '' }) => {
    return (
        <div aria-label={meta} className={styles.illustration} role="img">
            <MarkIcon className={styles.marker} />

            <Image priority alt="" className={styles.image} src={src} />

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
