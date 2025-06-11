import type { FC } from 'react';

import { Confirm } from '@widgets/confirm';

import DarkLayout from '../app/dark-layout';

const ConfirmPage: FC = () => {
    return (
        <DarkLayout>
            <Confirm />
        </DarkLayout>
    );
};

export default ConfirmPage;
