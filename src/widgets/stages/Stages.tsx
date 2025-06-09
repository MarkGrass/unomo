import { FC, ReactNode } from 'react';
import { Button, Card } from '@ui';
import styles from './Stages.module.css';
import cn from 'clsx';
import Image, { StaticImageData } from 'next/image';

export type StageItem = {
    key: string;
    title: string;
    description: string;
};

type StagesProps = {
    title: ReactNode;
    id: string;
    meta: string;
    image: StaticImageData;
    stages: StageItem[];
    description?: string;
    counter?: boolean;
};

export const Stages: FC<StagesProps> = ({
    image,
    id,
    meta = '',
    title = '',
    description = '',
    stages = [],
    counter = false,
}) => {
    return (
        <section id={id} className={styles.stages}>
            <h2 className={styles.head}>{title}</h2>

            {description && <p className={styles.message}>{description}</p>}

            <div className={styles.list}>
                <div
                    className={cn({
                        [styles.illustration]: true,
                        [styles.colored]: !counter,
                    })}
                >
                    <Image alt={meta} src={image} />
                </div>

                <ul className={styles.items}>
                    {stages.map((stage, index) => (
                        <Card
                            bordered
                            as="li"
                            color="white"
                            variant="flat"
                            key={stage.key}
                            className={cn({
                                [styles.stage]: true,
                                [styles.count]: counter,
                            })}
                            data-count={index + 1}
                        >
                            <div className={styles.info}>
                                <p className={styles.title}>{stage.title}</p>
                                <p className={styles.description}>{stage.description}</p>
                            </div>
                        </Card>
                    ))}
                </ul>
            </div>

            <Button className={styles.call} href="tel:+7 968 461 14 36">
                Получить {!counter && 'бесплатную'} консультацию
            </Button>
        </section>
    );
};
