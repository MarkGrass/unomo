import type { ReactNode } from 'react';

import type { Metadata } from 'next';

import { ServiceImage } from '@assets';
import { Footer, Header, Meta } from '@ui';
import '@shared/styles/index.css';
import { About } from '@widgets/about';
import { Application } from '@widgets/application';
import { Faq } from '@widgets/faq';
import { Review } from '@widgets/review';
import { Stages } from '@widgets/stages';

export const metadata: Metadata = {
    title: 'Unomo',
    description: 'Оказание юридической помощи',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    const stages = [
        {
            key: '1',
            title: 'Cвязь с нами',
            description:
                'Свяжитесь с нами по телефону 8 (968) 461-14-36 или оставьте заявку на обратный звонок через сайт, наш специалист свяжется  с вами в течение 5 минут',
        },
        {
            key: '2',
            title: 'Первичная консультация',
            description:
                'Проведём бесплатную консультацию — по телефону или в офисе. При необходимости запишем вас к юристу по вашему вопросу. Приём — по предварительной записи',
        },
        {
            key: '3',
            title: 'Изучение ситуации',
            description:
                'Юрист изучит ситуацию, предложит варианты защиты и объяснит перспективы. При согласии — заключим договор на сопровождение',
        },
        {
            key: '4',
            title: 'Подготовка документов',
            description:
                'Подготовим все нужные документы для защиты ваших интересов — заявления, жалобы, ходатайства и другие',
        },
        {
            key: '5',
            title: 'Представительство и защита',
            description:
                'Представим ваши интересы на всех этапах — от первой инстанции до надзорной, в суде и вне его',
        },
    ];

    return (
        <>
            <Meta />

            <Header />
            <main>
                {children}
                <About />
                <Stages
                    counter
                    id="stages"
                    image={ServiceImage}
                    meta="Этапы взаимодействия с Unomo"
                    stages={stages}
                    title={
                        <>
                            Этапы взаимодействия с нашей
                            <br className="break" /> юридической командой
                        </>
                    }
                />
                <Application />
                <Review />
                <Faq />
            </main>
            <Footer />
        </>
    );
}
