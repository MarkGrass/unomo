import { FC } from 'react';
import RootLayout from '../app/root-layout';
import { Service } from '@widgets/service';
import { BanksImage, LegalImage } from '@assets';

const BanksPage: FC = () => {
    const stages = [
        {
            key: '1',
            title: 'Разблокировка счёта по 115-ФЗ',
            description:
                'Подготовим пакет документов, объяснения, добьёмся разблокировки.',
        },
        {
            key: '2',
            title: 'Отмена ограничений по 161-ФЗ',
            description:
                'Решим проблему с лимитами, "подозрительными" переводами.',
        },
        {
            key: '3',
            title: 'Обжалование отказов банка',
            description:
                'Подача жалоб в ЦБ и суд.',
        },
        {
            key: '4',
            title: 'Профилактика повторных блокировок',
            description:
                'Настроим "чистую" схему платежей.',
        },
    ];

    return (
        <RootLayout>
            <Service
                meta="Блокировка банковских карт"
                title="Блокировка банковских карт"
                description="Дадим чёткий план действий и начнём помогать уже с первой
                            консультации - без лишних затрат и потери времени!"
                illustration={BanksImage}
                stageImg={LegalImage}
                stages={stages}
                stageMeta="Помогаем с решением блокировки банковских карт"
                stageTitle="Помогаем с решением блокировки банковских карт"
                stageDescription="Решим вопрос с банком, налоговой, финмониторингом. Быстро вернём доступ к деньгам."
            />
        </RootLayout>
    );
};

export default BanksPage;
