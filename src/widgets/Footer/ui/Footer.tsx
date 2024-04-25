import { FooterJoinCommunity } from 'features/FooterJoinCommunity';
import { FooterMediaLinks } from 'features/FooterMediaLinks';
import { FooterSubscribe } from 'features/FooterSubscribe';
import { BackToTopBTN } from 'shared/components/BackToTopBTN';
import { Logo } from 'shared/components/Logo';

import './footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footer__logo">
        <Logo section='footer' />
      </div>
      <div className="footer__form">
        <FooterSubscribe />
      </div>
      <div className="footer__community">
        <FooterJoinCommunity />
      </div>
      <div className="footer__toTop">
        <BackToTopBTN />
      </div>
      <div className="footer__media">
        <FooterMediaLinks />
      </div>
      <span className="footer__copyrights">(c) SuperDuperDB, Inc. All rights reserved</span>
    </footer>
  );
};

export default Footer;
