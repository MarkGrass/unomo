import type { FC } from 'react';

import { Payment } from '@widgets/payment';

import LightLayout from '../app/light-layout';

const PaymentPage: FC = () => {
    return (
        <LightLayout>
            <Payment />
        </LightLayout>
    );
};

export default PaymentPage;
