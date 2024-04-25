/* eslint-disable prettier/prettier */
import Link from 'next/link';

import { Header } from 'widgets/Header';

import './404.scss';

const BackToTopBTN = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <div className="error_page">
        <div className="mag_glass">🔎</div>
        <div>
          {' '}
          <h2 className="error_title">Page not found!</h2>{' '}
        </div>
        <div>
          <Link href={'/'}>
            <button className="primary">Go back to Homepage</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BackToTopBTN;
