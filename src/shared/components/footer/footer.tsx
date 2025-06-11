import type { FC } from 'react';

import cn from 'clsx';
import Link from 'next/link';

import { ROUTES } from '@const/routes';
import { LogoIcon, TelegramIcon, WhatsappIcon } from '@icons';

import { Button } from '../button';

import styles from './footer.module.css';

type FooterProps = {
    className?: string;
};

export const Footer: FC<FooterProps> = ({ className = '' }) => {
    return (
        <footer
            className={cn({
                [styles.footer]: true,
                [className]: Boolean(className),
            })}
        >
            <article className={styles.info}>
                <LogoIcon className={styles.logo} />

                <h3 className={styles.title}>Оказание юридической помощи</h3>
                <p className={styles.description}>
                    Дадим чёткий план действий и начнём помогать уже с первой консультации
                    - без лишних затрат и потери времени!
                </p>

                <div className={styles.actions}>
                    <Button
                        className={styles.action}
                        href={`${ROUTES.ROOT}${ROUTES.APPLICATION}`}
                    >
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

            <nav className={styles.links}>
                <Link className={cn(styles.link, styles.root)} href={ROUTES.ROOT}>
                    Главная
                </Link>
                <Link className={cn(styles.link, styles.about)} href={ROUTES.ABOUT}>
                    О нас
                </Link>
                <Link className={cn(styles.link, styles.services)} href={ROUTES.SERVICES}>
                    Услуги
                </Link>
                <Link className={cn(styles.link, styles.faq)} href={ROUTES.QUESTIONS}>
                    Частые вопросы
                </Link>
                <Link className={cn(styles.link, styles.app)} href={ROUTES.APPLICATION}>
                    Приложение
                </Link>
                {/*<Link className={cn(styles.link, styles.contacts)} href={ROUTES.CONTACTS}>*/}
                {/*    Контакты*/}
                {/*</Link>*/}
                <Link className={cn(styles.link, styles.reviews)} href={ROUTES.REVIEWS}>
                    Отзывы
                </Link>
            </nav>

            <div className={styles.communication}>
                <p>
                    <span>Есть вопрос?</span>
                    <span>Пишите в Telegram или WhatsApp</span>
                </p>

                <div className={styles.messengers}>
                    <Button
                        className={styles.messenger}
                        href="https://wa.me/+79684611436"
                        iconLeft={<WhatsappIcon className={styles.icon} />}
                        variant="ghost"
                    />

                    <Button
                        className={styles.messenger}
                        href="https://t.me/+79684611436"
                        iconLeft={<TelegramIcon className={styles.icon} />}
                        variant="ghost"
                    />
                </div>
            </div>

            <aside className={styles.legal}>
                <p className={styles.organization}>ИП Глазырин Егор Владимирович</p>
                <p className={styles.code}>ОГРНИП323508100514648 ИНН741307647394</p>

                <Link className={styles.policy} href="/policy">
                    Политика конфиденциальности
                </Link>
            </aside>
        </footer>
    );
};
