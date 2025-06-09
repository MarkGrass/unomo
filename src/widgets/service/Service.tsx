import { FC } from 'react';
import { Illustration } from './illustration';
import { Button } from '@ui';
import { Stats } from '@widgets/stats';
import { StageItem, Stages } from '@widgets/stages';
import { StaticImageData } from 'next/image';
import styles from './Service.module.css';

type ServiceProps = {
    meta: string;
    title: string;
    description: string;
    illustration: StaticImageData;
    stageImg: StaticImageData;
    stages: StageItem[];
    stageMeta: string;
    stageTitle: string;
    stageDescription: string;
};

export const Service: FC<ServiceProps> = ({
    illustration,
    stageImg,
    meta = '',
    title = '',
    description = '',
    stages = [],
    stageMeta = '',
    stageTitle = '',
    stageDescription = '',
}) => {
    return (
        <>
            <section className={styles.auto}>
                <div className={styles.wrapper}>
                    <Illustration meta={meta} src={illustration} />

                    <article className={styles.info}>
                        <h1 className={styles.title}>{title}</h1>
                        <p className={styles.description}>{description}</p>

                        <div className={styles.actions}>
                            <Button href="#application" className={styles.action}>
                                Получить консультацию
                            </Button>
                            <Button
                                href="/payment"
                                className={styles.action}
                                color="secondary"
                                variant="outline"
                            >
                                Быстрая оплата
                            </Button>
                        </div>
                    </article>
                </div>
            </section>

            <Stats />

            <Stages
                id="services"
                title={stageTitle}
                description={stageDescription}
                meta={stageMeta}
                image={stageImg}
                stages={stages}
            />
        </>
    );
};
