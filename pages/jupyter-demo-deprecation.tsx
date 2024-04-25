import { FC } from 'react';


import {Attention} from 'features/Attention'
import { metaData } from 'shared/constants';
import { MainLayout } from 'widgets/MainLayout';


const HomePage: FC = () => {

    return (
        <MainLayout {...metaData.main}>
            <Attention />
        </MainLayout>
    );
};

export default HomePage;
