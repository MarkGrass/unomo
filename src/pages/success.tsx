import { FC } from 'react';
import DarkLayout from '../app/dark-layout';
import { Success } from '@widgets/success';

const SuccessPage: FC = () => {
    return (
        <DarkLayout>
            <Success />
        </DarkLayout>
    );
};

export default SuccessPage;
