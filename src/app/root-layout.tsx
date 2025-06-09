import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { Footer, Header } from '@ui';
import '@shared/styles/index.css';
import { Services } from '@widgets/services';
import { About } from '@widgets/about';
import { Stages } from '@widgets/stages';
import { Application } from '@widgets/application';
import { Review } from '@widgets/review';
import { Faq } from '@widgets/faq';
import { Stats } from '@widgets/stats';
import cn from 'clsx';

const interFont = Inter({
    variable: '--font-primary',
    subsets: ['cyrillic', 'latin'],
    style: ['normal', 'italic'],
    weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
    title: 'Unomo',
    description: 'Оказание юридической помощи',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="ru">
            <body className={cn("root", interFont.variable)}>
                <Header />
                <main>
                    {children}
                    <Stats />
                    <Services />
                    <About />
                    <Stages />
                    <Application />
                    <Review />
                    <Faq />
                </main>
                <Footer />
            </body>
        </html>
    );
}
