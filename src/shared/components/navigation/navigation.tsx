import type { FC } from 'react';

import { clsx } from 'clsx';
import Link from 'next/link';

import { ROUTES } from '@const/routes';
import { PhoneIcon } from '@icons';

import { Button } from '../button';

import styles from './navigation.module.css';

type NavigationProps = {
    visible: boolean;
    color?: 'default' | 'white';
    onExpand: () => void;
};
export const Navigation: FC<NavigationProps> = ({
    color = 'default',
    visible = false,
}) => {
    return (
        <div
            className={clsx({
                [styles.collapse]: true,
                [styles[color]]: true,
                [styles._visible]: visible,
            })}
        >
            <nav className={styles.links}>
                <Link className={styles.link} href={ROUTES.ROOT}>
                    Главная
                </Link>
                <Link className={styles.link} href={ROUTES.SERVICES}>
                    Услуги
                </Link>
                <Link className={styles.link} href={ROUTES.ABOUT}>
                    О нас
                </Link>
                <Link className={styles.link} href={ROUTES.STAGES}>
                    Этапы
                </Link>
                <Link className={styles.link} href={ROUTES.REVIEWS}>
                    Отзывы
                </Link>
                <Link className={styles.link} href={ROUTES.QUESTIONS}>
                    Частые вопросы
                </Link>
                {/*<Link className={styles.link} href="#contacts">*/}
                {/*    Контакты*/}
                {/*</Link>*/}
            </nav>

            <Button
                className={styles.call}
                color="secondary"
                href="tel:+7 968 461 14 36"
                iconLeft={<PhoneIcon className={styles.callIcon} />}
                size="sm"
                variant="outline"
            >
                +7 968 461 14 36
            </Button>
        </div>
    );
};
