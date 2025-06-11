import type { FC } from 'react';

import type { StaticImageData } from 'next/image';

import { Button } from '@ui';
import type { StageItem } from '@widgets/stages';
import { Stages } from '@widgets/stages';
import { Stats } from '@widgets/stats';

import { Illustration } from './illustration';

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
                            <Button className={styles.action} href="#application">
                                Получить консультацию
                            </Button>
                            <Button
                                className={styles.action}
                                color="secondary"
                                href="/payment"
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
                description={stageDescription}
                id="services"
                image={stageImg}
                meta={stageMeta}
                stages={stages}
                title={stageTitle}
            />
        </>
    );
};
