/* eslint-disable prettier/prettier */
import { Button } from 'shared/components/Button';
import { links } from 'shared/constants';
import { handleExternalNavigation } from 'shared/utils';

import './example-section.scss';

const ExampleSection = () => {
  return (
    <section className="example-section__container">
      <div className="example-section__text">
        <h2>Example Use-Cases</h2>

        <p>
          Check out AI use cases and applications that we have already implemented using open-source
          models and public APIs!
        </p>
      </div>
      <div className="example-section__buttons">
        <Button
          label="Go to Use-Cases"
          variant="secondary"
          fullWidth
          onClick={() => handleExternalNavigation(links.use_cases)}
        />
      </div>
    </section>
  );
};

export default ExampleSection;
