import type { FC } from 'react';

import { Success } from '@widgets/success';

import DarkLayout from '../app/dark-layout';

const SuccessPage: FC = () => {
    return (
        <DarkLayout>
            <Success />
        </DarkLayout>
    );
};

export default SuccessPage;
