import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { Footer, Header } from '@ui';
import '@shared/styles/index.css';

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

export default function LightLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <div className={interFont.variable}>
            <Header color="white" />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
