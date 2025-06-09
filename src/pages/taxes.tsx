import { FC } from 'react';
import RootLayout from '../app/root-layout';
import { LegalImage, TaxesImage } from '@assets';
import { Service } from '@widgets/service';

const TaxesPage: FC = () => {
    const stages = [
        {
            key: '1',
            title: 'Споры с налоговой (ФНС) ',
            description:
                'Обжалуем доначисления, штрафы, блокировки счетов. Защита в суде.',
        },
        {
            key: '2',
            title: 'Подготовка и подача налоговой отчётности ',
            description:
                'Оформим и подадим декларации, поможем избежать ошибок и штрафов.',
        },
        {
            key: '3',
            title: 'Возврат налога / налоговый вычет ',
            description:
                'Сопроводим возврат налога — за ипотеку, лечение, обучение, инвестиции.',
        },
        {
            key: '4',
            title: 'Сопровождение налоговых проверок ',
            description:
                'Подготовим документы, защитим при камеральных и выездных проверках.',
        },
    ];

    return (
        <RootLayout>
            <Service
                title="Налоги и отчетность"
                description="Дадим чёткий план действий и начнём помогать уже с первой консультации - без лишних затрат и потери времени!"
                meta="Налоги и отчетность"
                illustration={TaxesImage}
                stageImg={LegalImage}
                stages={stages}
                stageMeta="Помогаем с решением налоговых споров"
                stageTitle="Помогаем с решением налоговых споров"
                stageDescription="Решаем налоговые споры, сопровождаем проверки, возвращаем налоги и помогаем с отчётностью."
            />
        </RootLayout>
    );
};

export default TaxesPage;
