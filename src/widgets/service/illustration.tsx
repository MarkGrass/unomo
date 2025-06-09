'use client';
import { FC } from 'react';
import { MarkIcon } from '@icons';
import Image, { StaticImageData } from 'next/image';
import { useResize } from '@hooks';
import cn from 'clsx';
import styles from './illustration.module.css';

type IllustrationProps = {
    meta: string;
    src: StaticImageData;
};

export const Illustration: FC<IllustrationProps> = ({ src, meta = '' }) => {
    const { isMobile } = useResize();

    return (
        <div className={styles.illustration} role="img" aria-label={meta}>
            <MarkIcon className={styles.marker} />

            <Image
                priority
                src={src}
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
