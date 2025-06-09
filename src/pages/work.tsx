import { FC } from 'react';
import RootLayout from '../app/root-layout';
import { LegalImage, WorkImage } from '@assets';
import { Service } from '@widgets/service';

const WorkPage: FC = () => {
    const stages = [
        {
            key: '1',
            title: 'Незаконное увольнение',
            description:
                'Оспорим приказ, восстановим на работе или добьёмся денежной компенсации.',
        },
        {
            key: '2',
            title: 'Невыплата заработной платы',
            description:
                'Взыщем зарплату, отпускные, премии, компенсации за задержку.',
        },
        {
            key: '3',
            title: 'Дисциплинарные взыскания',
            description:
                'Обжалуем выговоры, замечания, лишения премий, докажем их незаконность.',
        },
        {
            key: '4',
            title: 'Трудовой договор и его условия',
            description:
                'Проверим, составим, пересмотрим несправедливые или нарушающие закон условия.',
        },
        {
            key: '5',
            title: 'Понуждение к увольнению',
            description:
                'Защитим от давления, зафиксируем факты, восстановим ваши права.',
        },
    ];

    return (
        <RootLayout>
            <Service
                title="Трудовые споры"
                description="Дадим чёткий план действий и начнём помогать уже с первой консультации - без лишних затрат и потери времени!"
                meta="Трудовые споры"
                illustration={WorkImage}
                stageImg={LegalImage}
                stages={stages}
                stageMeta="Помогаем с решением трудовых споров"
                stageTitle="Помогаем с решением трудовых споров"
                stageDescription="Незаконное увольнение? Не выплатили зарплату? Давят дисциплинаркой? Поможем восстановить справедливость и отстоим ваши трудовые права."
            />
        </RootLayout>
    );
};

export default WorkPage;
