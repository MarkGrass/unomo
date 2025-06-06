import { FC } from 'react';
import { Card } from '@ui';
import { CityIcon, DateIcon, GroupIcon, ReviewIcon } from '@icons';
import styles from './Stats.module.css';

export const Stats: FC = () => {
    const stats = [
        {
            key: 'cities',
            title: '16+ городов',
            description: 'Работаем в крупнейших городах России',
            icon: <CityIcon />,
        },
        {
            key: 'review',
            title: '95,3% отзывов',
            description: 'Положительная оценка от наших клиентов',
            icon: <ReviewIcon />,
        },
        {
            key: 'employees',
            title: '20+ юристов',
            description: 'Профильные специалисты по ключевым направлениям',
            icon: <GroupIcon />,
        },
        {
            key: 'since',
            title: 'с 2017 года',
            description: 'Успешно решаем юридические вопросы',
            icon: <DateIcon />,
        },
    ];
    return (
        <section className={styles.stats}>
            {stats.map((item) => (
                <Card className={styles.item} as="figure" key={item.key} color="white">
                    <div className={styles.icon} role="img" aria-label={item.description}>
                        {item.icon}
                    </div>
                    <h3 className={styles.title}>{item.title}</h3>
                    <p className={styles.description}>{item.description}</p>
                </Card>
            ))}
        </section>
    );
};
