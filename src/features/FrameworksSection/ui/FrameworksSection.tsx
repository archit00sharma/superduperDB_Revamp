/* eslint-disable prettier/prettier */
import { AISlider } from 'features/AISlider';
import { CodeHighlighter } from 'shared/components/CodeHighlighter';

import './frameworks-section.scss';

const FrameworksSection = () => {
  const code = `from superduperdb import superduper 
from transformers import pipeline
  
model = superduper(pipeline('sentiment-analysis'))
model.fit( 
    X='review', 
    y='rating', 
    database=my_db, 
    select=Collection('docs').find({'rating': {'$exists': 1}})
)
model.predict(
    X='review', 
    db=my_db, 
    select=Collection('docs').find()
)    # make predictions on unseen data
`;

  return (
    <section className="frameworks__container">
      <AISlider />
      <div className="frameworks">
        <div className="frameworks__code">
          <CodeHighlighter code={code} />
        </div>
        <div className="frameworks__text">
          <h2>Work with any ML/AI frameworks and APIs</h2>
          <p>
            Integrate and combine models from Sklearn, PyTorch, HuggingFace with AI APIs such as
            OpenAI to build even the most complex AI applications and workflows.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FrameworksSection;
