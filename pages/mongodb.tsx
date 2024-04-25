import { FC } from 'react';

import { BuildAISection } from 'features/BuildAISection';
import { DeveloperExperienceSection } from 'features/DeveloperExperienceSection';
import { ExampleSection } from 'features/ExampleSection';
import { FrameworksSection } from 'features/FrameworksSection';
import { GetStartedSection } from 'features/GetStartedSection';
import { PossibilitiesSection } from 'features/PossibilitiesSection';
import { TransformMongoSection } from 'features/TransformMongoSection';
import { USPSection } from 'features/USPSection';
import { VectorDatabaseSection } from 'features/VectorDatabaseSection';
import { WhoIsForSection } from 'features/WhoIsForSection';
import { WhySection } from 'features/WhySection';
import { metaData } from 'shared/constants';
import { MainLayout } from 'widgets/MainLayout';


const HomePage: FC = () => {
    

    
return (
        <MainLayout {...metaData.main}>

            <USPSection section={'mongodb'} />
            <BuildAISection section={'mongodb'}/>
            <VectorDatabaseSection section={'mongodb'} />
            <FrameworksSection />
            <PossibilitiesSection />
            <ExampleSection />
            <TransformMongoSection />
            <WhoIsForSection />
            <WhySection />
            <DeveloperExperienceSection />
            <GetStartedSection />
        </MainLayout>
    );
};

export default HomePage;
