import { FC } from 'react';
import { Button } from '@ui';
import { PhoneIcon } from '@icons';
import styles from './navigation.module.css';
import Link from 'next/link';
import { clsx } from 'clsx';

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
                <Link className={styles.link} href="/">
                    Главная
                </Link>
                <Link className={styles.link} href="#services">
                    Услуги
                </Link>
                <Link className={styles.link} href="#about">
                    О нас
                </Link>
                <Link className={styles.link} href="#stages">
                    Этапы
                </Link>
                <Link className={styles.link} href="#reviews">
                    Отзывы
                </Link>
                <Link className={styles.link} href="#faq">
                    Частые вопросы
                </Link>
                {/*<Link className={styles.link} href="#contacts">*/}
                {/*    Контакты*/}
                {/*</Link>*/}
            </nav>

            <Button
                className={styles.call}
                variant="outline"
                color="secondary"
                href="tel:+7 968 461 14 36"
                size="sm"
                iconLeft={<PhoneIcon className={styles.callIcon} />}
            >
                +7 968 461 14 36
            </Button>
        </div>
    );
};
