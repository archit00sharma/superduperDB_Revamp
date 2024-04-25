/* eslint-disable prettier/prettier */
import { SchemeCard } from 'shared/components/SchemeCard';
import type { SchemeCardProps } from 'shared/components/SchemeCard';

import './transform-mongo-section.scss';
import { schemeCards } from '../model/schemeCards';

const TransformMongoSection = () => {
  return (
    <section className="transform-mongo-section__container">
      <div className="transform-mongo-section__content">
        <h2 className="transform-mongo-section__title">
          SuperDuperDB transforms your datastore into:
        </h2>
        <div className="transform-mongo-section__text">
          <p>
            <span className="transform-mongo-section__emoji-icon">🔮</span> <br />
            <br />
            <span className="transform-mongo-section__keywords">
              An end-to-end AI deployment
            </span>{' '}
            which includes a model repository & registry as well as computation of outputs
          </p>
          <p>
            <span className="transform-mongo-section__emoji-icon">🧠</span> <br />
            <br />
            <span className="transform-mongo-section__keywords">A model trainer </span>
            allowing you to easily train and fine-tune your models simply by querying your
            data(store)
          </p>
          <p>
            <span className="transform-mongo-section__emoji-icon">🛒</span> <br />
            <br />
            <span className="transform-mongo-section__keywords">A feature store</span> in which the
            model outputs are stored in desired formats and types, instantly available in the
            datastore
          </p>
          <p>
            <span className="transform-mongo-section__emoji-icon">📦</span> <br />
            <br />
            <span className="transform-mongo-section__keywords">
              A fully functional vector database
            </span>{' '}
            enabling straightforward generation of vector embeddings on your data with your choice
            of models
          </p>
        </div>
      </div>
      <div className="transform-mongo-section__scheme">
        {schemeCards.map((card) => (
          <SchemeCard key={card.id} {...(card as SchemeCardProps)} />
        ))}
      </div>
    </section>
  );
};

export default TransformMongoSection;
