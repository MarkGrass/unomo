'use client';
import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';

import cn from 'clsx';

import { ROUTES } from '@const/routes';
import type { CardColor } from '@ui';
import { Button, Card, Stars } from '@ui';

import styles from './Review.module.css';

export const Review: FC = () => {
    const cards = [
        {
            key: '1',
            message:
                'Меня уволили с нарушениями, даже не выплатив зарплату за последний месяц. Юрист из Unomo помог всё вернуть и добиться компенсации. Без них бы не справилась!',
            author: 'Екатерина М.',
            stars: 5,
            color: 'primary',
        },
        {
            key: '2',
            message:
                'После ДТП страховая занижала выплату, и я не знал, как действовать. В Unomo всё разъяснили и помогли взыскать нужную сумму через суд.',
            author: 'Андрей С.',
            stars: 4,
            color: 'secondary',
        },
        {
            key: '3',
            message:
                'Сосед подал иск по надуманному поводу, а я не знала, как защититься. В компании подготовили возражения и представляли меня в суде. Всё закончилось в мою пользу.',
            author: 'Олег К.',
            stars: 5,
            color: 'primary',
        },
        {
            key: '4',
            message:
                'Заказала технику, а привезли нерабочую. Продавец отказывался возвращать деньги, но после грамотной претензии от юриста из Unomo вопрос решился за пару дней!',
            author: 'Наталья В.',
            stars: 5,
            color: 'white',
        },
        {
            key: '5',
            message:
                'Развод был непростым, но с помощью юристов Unomo я добилась, чтобы ребёнок остался со мной.',
            author: 'Наталья В.',
            stars: 5,
            color: 'white',
        },
        {
            key: '6',
            message:
                'После покупки квартиры прежний собственник начал процедуру банкротства, и сделку пытались оспорить — благодаря юристам Unomo мне удалось отстоять свои права и сохранить жильё.',
            author: 'Андрей С.',
            stars: 4,
            color: 'secondary',
        },
        {
            key: '7',
            message:
                'Обратилась за помощью в подготовке декларации — всё оформили чётко и без ошибок, сдала в налоговую без проблем и получила налоговый вычет',
            author: 'Олег К.',
            stars: 5,
            color: 'primary',
        },
    ];
    const initialState = Array(cards.length).fill(null);
    const slidesRef = useRef<(HTMLElement | null)[]>(initialState);
    const [isInteraction, setIsInteraction] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);

    const handleClick = (index: number) => {
        setIsInteraction(true);
        setActiveSlide(index);
    };

    useEffect(() => {
        if (isInteraction) {
            setIsInteraction(false);
            slidesRef.current[activeSlide]?.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'start',
            });
        }
    }, [activeSlide, isInteraction]);

    return (
        <section className={styles.review} id="reviews">
            <h2 className={styles.head}>Каждый отзыв — это история решённого вопроса</h2>

            <div className={styles.wrapper}>
                {cards.map((card, index) => (
                    <div
                        className={styles.item}
                        key={card.key}
                        ref={(c) => {
                            if (c) {
                                slidesRef.current[index] = c;
                            }
                        }}
                    >
                        <Card
                            as="figure"
                            className={styles.card}
                            color={card.color as CardColor}
                        >
                            <cite className={styles.message}>{card.message}</cite>

                            <footer className={styles.rate}>
                                <p>{card.author}</p>
                                <Stars count={card.stars} />
                            </footer>
                        </Card>
                    </div>
                ))}
            </div>

            <footer>
                <div className={styles.pointer}>
                    {cards.map(({ key, author }, index) => (
                        <div
                            aria-label={author}
                            className={cn({
                                [styles.point]: true,
                                [styles.active]: activeSlide === index,
                            })}
                            key={key}
                            role="button"
                            tabIndex={0}
                            onClick={() => handleClick(index)}
                        ></div>
                    ))}
                </div>

                <Button className={styles.action} href={ROUTES.APPLICATION}>
                    Получить консультацию
                </Button>
            </footer>
        </section>
    );
};
