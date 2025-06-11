import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import type { ServiceData } from '@data';
import { serviceData } from '@data';
import { Service } from '@widgets/service';

import RootLayout from '../../app/root-layout';

export const getServerSideProps = (async (params) => {
    const entry = params.resolvedUrl.replace('/', '');
    const data = serviceData[entry] as ServiceData;

    return { props: { data } };
}) satisfies GetServerSideProps<{ data: ServiceData }>;

const ServicePage = ({
    data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <RootLayout>
            <Service {...data} />
        </RootLayout>
    );
};

export default ServicePage;
