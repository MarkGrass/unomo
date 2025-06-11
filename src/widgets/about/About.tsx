'use client';
import type { FC } from 'react';

import Image from 'next/image';

import { FounderMobileImage, FounderDesktopImage, SignImage } from '@assets';
import { useResize } from '@hooks';
import { Slider } from '@ui';

import styles from './About.module.css';

export const About: FC = () => {
    const { isMobile } = useResize();

    return (
        <section className={styles.about} id="about">
            <article className={styles.founder}>
                <h2 className={styles.head}>Правовая поддержка на все случаи жизни</h2>

                <figure
                    aria-label="Глазырин Егор Владимирович, Основатель"
                    className={styles.photo}
                    role="img"
                >
                    <Image
                        alt=""
                        src={isMobile ? FounderMobileImage : FounderDesktopImage}
                    />
                    <figcaption className={styles.caption}>
                        <p className={styles.name}>
                            Глазырин
                            <br />
                            Егор Владимирович
                        </p>
                        <p className={styles.position}>Основатель</p>
                    </figcaption>
                </figure>

                <blockquote className={styles.cite}>
                    <p>
                        Я юрист и уже больше 10 лет помогаю людям решать их правовые
                        вопросы. Я знаю, как сложно бывает разобраться в юридических
                        делах, особенно когда вокруг много непонятных слов и давление.
                        Поэтому моя задача — объяснить всё простыми словами, быть рядом и
                        довести дело до результата. Я создал эту компанию, чтобы каждый
                        человек мог получить понятную и надёжную помощь. Понятно и по
                        делу.
                    </p>
                    <p>
                        С уважением к Вам!
                        <Image
                            alt="Подпись основателя"
                            className={styles.sign}
                            height={133}
                            src={SignImage}
                            width={160}
                        />
                    </p>
                </blockquote>
            </article>

            <Slider className={styles.employees} title="В штате более 20 юристов" />
        </section>
    );
};
