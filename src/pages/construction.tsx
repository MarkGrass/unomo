import type { FC } from 'react';

import { ConstructionImage, LegalImage } from '@assets';
import { Service } from '@widgets/service';

import RootLayout from '../app/root-layout';

const ConstructionPage: FC = () => {
    const stages = [
        {
            key: '1',
            title: 'Нарушение договора подряда ',
            description: 'Претензия, неустойка, суд, возврат аванса.',
        },
        {
            key: '2',
            title: 'Некачественное строительство',
            description: 'Экспертиза, иск, компенсация.',
        },
        {
            key: '3',
            title: 'Брошенный или незавершённый объект',
            description: 'Зафиксируем, добьёмся расторжения договора.',
        },
        {
            key: '4',
            title: 'Споры по объёмам и материалам',
            description: 'Докажем несоответствие и вернём переплаты.',
        },
        {
            key: '5',
            title: 'Разрыв договора и возврат средств',
            description: 'Законно расторгнем контракт.',
        },
        {
            key: '6',
            title: 'Оформление и защита прав на дом',
            description: 'Узаконим или спасём объект от сноса.',
        },
    ];

    return (
        <RootLayout>
            <Service
                description="Дадим чёткий план действий и начнём помогать уже с первой консультации - без лишних затрат и потери времени!"
                illustration={ConstructionImage}
                meta="Строительные споры"
                stageDescription="Не построили дом? Нарушили сроки? Сделали некачественно? Поможем вернуть деньги или заставим доделать."
                stageImg={LegalImage}
                stageMeta="Помогаем с решением строительных споров"
                stageTitle="Помогаем с решением строительных споров"
                stages={stages}
                title="Строительные споры"
            />
        </RootLayout>
    );
};

export default ConstructionPage;
