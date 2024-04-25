/* eslint-disable prettier/prettier */
import Link from 'next/link';

import { SubscribeForm } from 'features/SubscribeForm';
import { Header } from 'widgets/Header';

import './waitlist.scss';

const BackToTopBTN = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <div className="waitlist_page__container">
        <div className="waitlist_page__mag_glass">⌛</div>
        <div>
          {' '}
          <h2 className="waitlist_page__title">Join the beta waitlist for SuperDuper Cloud!</h2>{' '}
        </div>

        <SubscribeForm className="waitlist_page__form" />

      </div>
    </>
  );
};

export default BackToTopBTN;
