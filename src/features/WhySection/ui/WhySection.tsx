import './why-section.scss';

const WhySection = () => {
  return (
    <section className="why-section__container">
      <h2 className="why-section__title">Why choose SuperDuperDB?</h2>

      <div className="why-section__text">
        <div className="why-section__paragraph-with-emoji">
          <span className="why-section__emoji">⭐️</span>
          <p>
            <span className="why-section__keywords">
              Avoid data duplication, convoluted pipelines and complex infrastructure
            </span>{' '}
            with a single scalable deployment of all AI models and APIs
          </p>
        </div>
        <div className="why-section__paragraph-with-emoji">
          <span className="why-section__emoji">⭐️</span>
          <p>
            <span className="why-section__keywords">
              New data is processed automatically and immediately{' '}
            </span>{' '}
            keeping the deployment always up-to-date
          </p>
        </div>
        <div className="why-section__paragraph-with-emoji">
          <span className="why-section__emoji">⭐️</span>
          <p>
            <span className="why-section__keywords">A simple and familiar Python interface</span>{' '}
            that can handle even the most complex AI use-cases without requiring MLOps knowledge
          </p>
        </div>
        <div className="why-section__paragraph-with-emoji">
          <span className="why-section__emoji">⭐️</span>
          <p>
            {' '}
            <span className="why-section__keywords">
              Development and deployment of AI applications
            </span>{' '}
            on your data is massively simplified
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
