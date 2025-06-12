import type { ReactNode } from 'react';

import { Footer, Header, Meta } from '@ui';
import '@shared/styles/index.css';

export default function LightLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <>
            <Meta />
            <Header inverse />
            <main>{children}</main>
            <Footer />
        </>
    );
}
