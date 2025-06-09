import { FC } from 'react';
import RootLayout from '../app/root-layout';
import { Service } from '@widgets/service';
import { InsuranceImage, LegalImage } from '@assets';

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
                meta="Страховые споры"
                title="Страховые споры"
                description="Дадим чёткий план действий и начнём помогать уже с первой консультации - без лишних затрат и потери времени!"
                illustration={InsuranceImage}
                stageImg={LegalImage}
                stages={stages}
                stageMeta="Помогаем с решением страховых споров"
                stageTitle="Помогаем с решением страховых споров"
                stageDescription="Заставим страховую выплатить всё по закону — быстро и без лишней волокиты."
            />
        </RootLayout>
    );
};

export default InsurancePage;
