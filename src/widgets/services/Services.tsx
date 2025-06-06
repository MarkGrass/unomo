import { FC } from 'react';
import { Button, Card } from '@ui';
import styles from './Services.module.css';
import { ForwardIcon } from '@icons';
import cn from 'clsx';

export const Services: FC = () => {
    const services = [
        {
            key: 'auto',
            title: `Автомобильные и
            административные
            споры`,
            path: '/auto',
        },
        {
            key: 'taxes',
            title: `Налоги
            и отчетность`,
            path: '/taxes',
        },
        {
            key: 'work',
            title: `Трудовые
            споры`,
            path: '/work',
        },
        {
            key: 'civil',
            title: `Гражданские споры
            и суды`,
            path: '/civil',
        },
        {
            key: 'estate',
            title: `Недвижимость
            и жилье`,
            path: '/estate',
        },
        {
            key: 'consumer',
            title: `Права
            потребителей`,
            path: '/consumer',
        },
        {
            key: 'insurance',
            title: `Страховые
            споры`,
            path: '/insurance',
        },
        {
            key: 'family',
            title: `Семейные
            споры`,
            path: '/family',
        },
        {
            key: 'construction',
            title: `Строительные
            споры`,
            path: '/construction',
        },
        {
            key: 'land',
            title: `Земельные
            споры`,
            path: '/land',
        },
        {
            key: 'banks',
            title: `Блокировка
            банковских карт`,
            path: '/banks',
        },
        {
            key: 'fraud',
            title: 'Мошенничество',
            path: '/fraud',
        },
    ];
    return (
        <section className={styles.services}>
            <h2 className={styles.header}>Помогаем с решением любых правовых вопросов</h2>
            <p className={styles.description}>
                Более 20 юристов в штате, которые помогут с любым вопросом
            </p>
            <nav className={styles.list}>
                {services.map((service) => (
                    <Card
                        as="figure"
                        key={service.key}
                        color="white"
                        className={cn(styles.service, styles[service.key])}
                    >
                        <h3 className={styles.title}>{service.title}</h3>

                        <Button
                            className={styles.link}
                            href={service.path}
                            color="primary"
                            variant="outline"
                            iconRight={<ForwardIcon width={24} height={24} />}
                        >
                            Подробнее
                        </Button>
                    </Card>
                ))}
            </nav>
        </section>
    );
};
