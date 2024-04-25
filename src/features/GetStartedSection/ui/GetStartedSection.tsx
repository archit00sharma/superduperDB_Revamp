import { Button } from 'shared/components/Button';
import { links } from 'shared/constants';
import { handleExternalNavigation } from 'shared/utils';

import './get-started-section.scss';

const GetStartedSection = () => {
  const handleGetStartedClick = () => handleExternalNavigation(links.demoLink);

  return (
    <section className="get-started-section__container">
      <div className="get-started-section__text">
        <span className="get-started-section__icon">🚀</span>
        <h2>Get started with SuperDuperDB</h2>

        <p>
          SuperDuperDB comes pre-loaded with all you need to supercharge your data with AI. It’s
          really that simple!
        </p>
      </div>
      <div className="get-started-section__buttons">
        <Button label="Get Started" variant="primary" fullWidth onClick={handleGetStartedClick} />
      </div>
    </section>
  );
};

export default GetStartedSection;
