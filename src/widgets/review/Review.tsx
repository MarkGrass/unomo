import { FC } from 'react';
import { Button, Card, CardColor, Stars, Typo } from '@ui';
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
    return (
        <section className={styles.review}>
            <Typo>Каждый отзыв — это история решённого вопроса</Typo>
            <div className={styles.cloud}>
                {cards.map((card) => (
                    <Card key={card.key} as="figure" color={card.color as CardColor}>
                        <Typo as="cite">{card.message}</Typo>
                        <footer>
                            <Typo>{card.author}</Typo>
                            <Stars count={card.stars} />
                        </footer>
                    </Card>
                ))}
            </div>
            <Button>Получить консультацию</Button>
        </section>
    );
};
