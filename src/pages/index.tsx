import { FC } from 'react';
import { Welcome } from '@widgets/welcome';
import RootLayout from '../app/root-layout';

const Main: FC = () => {
    return (
        <RootLayout>
            <Welcome />
        </RootLayout>
    );
};

export default Main;
