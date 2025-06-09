import { FC } from 'react';
import Link from 'next/link';
import cn from 'clsx';
import styles from './footer.module.css';
import { LogoIcon, TelegramIcon, WhatsappIcon } from '@icons';
import { Button } from '@ui';

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

                <h3 className={styles.title}>
                    Оказание юридической помощи
                </h3>
                <p className={styles.description}>
                    Дадим чёткий план действий и начнём помогать уже с первой консультации
                    - без лишних затрат и потери времени!
                </p>

                <div className={styles.actions}>
                    <Button className={styles.action}>Получить консультацию</Button>
                    <Button className={styles.action} color="secondary" variant="outline">
                        Быстрая оплата
                    </Button>
                </div>
            </article>

            <nav className={styles.links}>
                <Link className={cn(styles.link, styles.root)} href="/">
                    Главная
                </Link>
                <Link className={cn(styles.link, styles.about)} href="#about">
                    О нас
                </Link>
                <Link className={cn(styles.link, styles.services)} href="#services">
                    Услуги
                </Link>
                <Link className={cn(styles.link, styles.faq)} href="#faq">
                    Частые вопросы
                </Link>
                <Link className={cn(styles.link, styles.app)} href="#app">
                    Приложение
                </Link>
                <Link className={cn(styles.link, styles.contacts)} href="#contacts">
                    Контакты
                </Link>
                <Link className={cn(styles.link, styles.reviews)} href="#reviews">
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
                        variant="ghost"
                        iconLeft={<WhatsappIcon className={styles.icon} />}
                    />

                    <Button
                        className={styles.messenger}
                        href="https://t.me"
                        variant="ghost"
                        iconLeft={<TelegramIcon className={styles.icon} />}
                    />
                </div>
            </div>

            <aside className={styles.legal}>
                <p className={styles.organization}>ИП Глазырин Егор Владимирович</p>
                <p className={styles.code}>ОГРНИП323508100514648 ИНН741307647394</p>

                <Link
                    href="/policy"
                    className={styles.policy}
                >
                    Политика конфиденциальности
                </Link>
            </aside>
        </footer>
    );
};
