import { Button } from 'shared/components/Button';
import { TextBlock } from 'shared/components/TextBlock';
import { links } from 'shared/constants';
import { handleExternalNavigation } from 'shared/utils';

import './who-is-for-section.scss';
import { textBlocks } from '../model/sectionData';

const WhoIsForSection = () => {
  const handleGetStartedClick = () => handleExternalNavigation(links.getStarted);

  return (
    <section className="who-is-for-section__container">
      <h2>Who is SuperDuperDB for?</h2>

      <div className="who-is-for-section__content">
        {textBlocks.map((block) => (
          <TextBlock key={block.title} {...block} />
        ))}
        <div className="who-is-for-section__buttons">
          <Button label="Get started" variant="primary" fullWidth onClick={handleGetStartedClick} />
        </div>
      </div>
    </section>
  );
};

export default WhoIsForSection;
