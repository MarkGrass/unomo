import type { ReactNode } from 'react';

import type { Metadata } from 'next';

import { Footer, Header, Meta } from '@ui';

import '@shared/styles/index.css';

export const metadata: Metadata = {
    title: 'Unomo',
    description: 'Оказание юридической помощи',
};

export default function DarkLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <>
            <Meta />
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}
