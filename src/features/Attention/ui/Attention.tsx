/* eslint-disable prettier/prettier */
import Link from 'next/link';
import React from 'react';

import './attention-section.scss';


const AttentionSection = () => {

  return (
    <section className="attention__container">
      <div className="attention__text">
        <h1 id="attention-title" className="attention__title">
          ⚠️
        </h1>
        <h2 className="attention__paragraph">
          We have deprecated the live demo!
        </h2>
        <p className="attention__paragraph">
          Instead, we recommend installing SuperDuperDB via Pip or Docker. This will provide you with a comprehensive deployment instead of a basic notebook environment. Please find the <a className='attention__links' href='https://docs.superduperdb.com/docs/docs/get_started/installation/' target='_blank'>installation guide in our docs here</a>.
        </p>



        <p className="attention__paragraph">
          After installing you can try all the <a className='attention__links' href='https://docs.superduperdb.com/docs/category/use-cases/' target='_blank'>example use-cases and notebooks to be found here</a>.
        </p>
      </div>

      <div className='attention__button'>
        <Link href={'/'}>
          <button className="primary">Go back to Homepage</button>
        </Link>
      </div>
    </section>
  );
};

export default AttentionSection;
