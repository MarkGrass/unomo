import type { FC, PropsWithChildren } from 'react';

import Head from 'next/head';

type MetaProps = {
    title?: string;
    description?: string;
    keywords?: string;
    phone?: string;
    image?: string;
    url?: string;
};

export const Meta: FC<PropsWithChildren<MetaProps>> = ({
    title = 'Unomo',
    description = 'Оказание юридической помощи',
    keywords = 'юрист, юридическая помощь, юридическая консультация, правовая поддержка, защита в суде',
    phone = '+7 968 461 14 36',
    image = '/unomo.png',
    url = '',
    children,
}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta content={description} name="description" />
            {keywords && <meta content={keywords} name="keywords" />}

            <meta content={title} property="og:title" />
            <meta content="Unomo — Оказание юридической помощи" property="og:site_name" />
            <meta content={description} property="og:description" />
            <meta content={phone} property="og:phone_number" />
            <meta content={image} property="og:image" />
            {url && <meta content={url} property="og:url" />}

            <link href="/favicon.ico" rel="icon" sizes="32x32" />
            <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
            <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
            <link href="/manifest.webmanifest" rel="manifest" />

            <link href="https://fonts.googleapis.com" rel="preconnect" />
            <link
                crossOrigin="anonymous"
                href="https://fonts.gstatic.com"
                rel="preconnect"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@400..700&display=swap"
                rel="stylesheet"
            />

            {children}
        </Head>
    );
};
