'use client';
import { FC, useEffect, useRef, useState } from 'react';
import { Button, Typo } from '@ui';
import cn from 'clsx';
import styles from './Welcome.module.css';

import { Illustration } from './illustration';

export const Welcome: FC = () => {
    const headerHeight = 92;
    const containerOffset = 24;
    const [isScrollOver, setIsScrollOver] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const handleScroll = () => {
        if (!containerRef.current) {
            return;
        }

        const { height, y } = containerRef.current.getBoundingClientRect();

        if (height - headerHeight < Math.abs(y)) {
            document.documentElement.style.setProperty(
                '--header-background',
                'rgb(var(--color-blue-rgba) / 0.4)',
            );
        } else {
            document.documentElement.style.setProperty(
                '--header-background',
                'rgb(var(--color-white-alpha) / 0.1)',
            );
        }

        setIsScrollOver(height - containerOffset < Math.abs(y));
    };

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className={cn({
                [styles.main]: true,
                [styles.scrollOver]: isScrollOver,
            })}
        >
            <div className={styles.wrapper}>
                <Illustration />

                <article className={styles.info}>
                    <Typo className={styles.title} as="h1">
                        Оказание
                        <br />
                        юридической помощи
                    </Typo>

                    <Typo as="p" className={styles.description} size="sm">
                        Дадим чёткий план действий и начнём помогать уже с первой
                        консультации - без лишних затрат и потери времени!
                    </Typo>

                    <div className={styles.actions}>
                        <Button className={styles.action}>Получить консультацию</Button>
                        <Button className={styles.action} variant="outline">
                            Быстрая оплата
                        </Button>
                    </div>
                </article>
            </div>
        </section>
    );
};
