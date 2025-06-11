import type { FC } from 'react';

import { InsuranceImage, LegalImage } from '@assets';
import { Service } from '@widgets/service';

import RootLayout from '../app/root-layout';

const InsurancePage: FC = () => {
    const stages = [
        {
            key: '1',
            title: 'Отказ в страховой выплате',
            description: 'Обжалуем, докажем, добьёмся денег.',
        },
        {
            key: '2',
            title: 'Занижение суммы',
            description: 'Назначим экспертизу, увеличим выплату.',
        },
        {
            key: '3',
            title: 'Жизнь, здоровье, имущество',
            description: 'Выплаты по страховым случаям любой сложности.',
        },
        {
            key: '4',
            title: 'Ипотека и недвижимость',
            description: 'Работаем с банками, агентами, взысканием убытков.',
        },
        {
            key: '5',
            title: 'Суд с страховой компанией',
            description: 'Полное сопровождение до победы.',
        },
    ];

    return (
        <RootLayout>
            <Service
                description="Дадим чёткий план действий и начнём помогать уже с первой консультации - без лишних затрат и потери времени!"
                illustration={InsuranceImage}
                meta="Страховые споры"
                stageDescription="Заставим страховую выплатить всё по закону — быстро и без лишней волокиты."
                stageImg={LegalImage}
                stageMeta="Помогаем с решением страховых споров"
                stageTitle="Помогаем с решением страховых споров"
                stages={stages}
                title="Страховые споры"
            />
        </RootLayout>
    );
};

export default InsurancePage;
