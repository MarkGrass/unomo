import { FC } from 'react';
import { Payment } from '@widgets/payment';
import ShortLayout from '../../app/short-layout';

const Main: FC = () => {
    return (
        <ShortLayout>
            <Payment />
        </ShortLayout>
    );
};

export default Main;
