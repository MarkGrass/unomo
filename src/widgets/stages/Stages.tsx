import { FC } from 'react';
import { Button, Card } from '@ui';
import styles from './Stages.module.css';

export const Stages: FC = () => {
    const stages = [
        {
            key: '1',
            title: 'Cвязь с нами',
            description:
                'Свяжитесь с нами по телефону 8 (968) 461-14-36 или оставьте заявку на обратный звонок через сайт, наш специалист свяжется  с вами в течение 5 минут',
        },
        {
            key: '2',
            title: 'Первичная консультация',
            description:
                'Проведём бесплатную консультацию — по телефону или в офисе. При необходимости запишем вас к юристу по вашему вопросу. Приём — по предварительной записи',
        },
        {
            key: '3',
            title: 'Изучение ситуации',
            description:
                'Юрист изучит ситуацию, предложит варианты защиты и объяснит перспективы. При согласии — заключим договор на сопровождение',
        },
        {
            key: '4',
            title: 'Подготовка документов',
            description:
                'Подготовим все нужные документы для защиты ваших интересов — заявления, жалобы, ходатайства и другие',
        },
        {
            key: '5',
            title: 'Представительство и защита',
            description:
                'Представим ваши интересы на всех этапах — от первой инстанции до надзорной, в суде и вне его',
        },
    ];

    return (
        <section className={styles.stages}>
            <h2 className={styles.head}>
                Этапы взаимодействия с нашей
                <br className={styles.break} /> юридической командой
            </h2>
            <ul className={styles.list}>
                {stages.map((stage, index) => (
                    <Card
                        bordered
                        as="li"
                        color="white"
                        variant="flat"
                        key={stage.key}
                        className={styles.stage}
                        data-count={index + 1}
                    >
                        <div className={styles.info}>
                            <p className={styles.title}>{stage.title}</p>
                            <p className={styles.description}>{stage.description}</p>
                        </div>
                    </Card>
                ))}
            </ul>

            <Button className={styles.call} href="tel:+7 968 461 14 36">Получить консультацию</Button>
        </section>
    );
};
