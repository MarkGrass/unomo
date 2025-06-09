import { FC } from 'react';
import RootLayout from '../app/root-layout';
import { Service } from '@widgets/service';
import { FamilyImage, LegalImage } from '@assets';

const FamilyPage: FC = () => {
    const stages = [
        {
            key: '1',
            title: 'Развод через суд',
            description: 'Проведём процедуру даже без согласия второго супруга, подготовим документы, представим в суде',
        },
        {
            key: '2',
            title: 'Алименты',
            description: 'Назначим или изменим размер выплат, взыщем задолженность через приставов или суд',
        },
        {
            key: '3',
            title: 'Раздел имущества',
            description: 'Составим список имущества, оценим, выделим доли, добьёмся справедливого решения',
        },
        {
            key: '4',
            title: 'Споры о детях',
            description: 'Установим место жительства ребёнка, порядок общения с родителем, защитим интересы ребёнка.',
        },
        {
            key: '5',
            title: 'Брачный договор',
            description: 'Составим, проверим или оспорим договор. Обеспечим справедливые и законные условия.',
        },
        {
            key: '6',
            title: 'Установление или оспаривание отцовства',
            description: 'Подадим иск, соберём доказательства, представим интересы в суде',
        },
    ];

    return (
        <RootLayout>
            <Service
                meta="Семейные споры"
                title="Семейные споры"
                description="Дадим чёткий план действий и начнём помогать уже с первой консультации - без лишних затрат и потери времени!"
                illustration={FamilyImage}
                stageImg={LegalImage}
                stages={stages}
                stageMeta="Помогаем с решением семейных споров"
                stageTitle="Помогаем с решением семейных споров"
                stageDescription="Решаем семейные конфликты: развод, дети, алименты, имущество. Консультация — бесплатно."
            />
        </RootLayout>
    );
};

export default FamilyPage;
