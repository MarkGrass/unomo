import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Footer, Header } from '@ui';
import '@shared/styles/index.css';

export const metadata: Metadata = {
    title: 'Unomo',
    description: 'Оказание юридической помощи',
};

export default function ShortLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <>
            <Header color="white" />
            <main>{children}</main>
            <Footer />
        </>
    );
}
