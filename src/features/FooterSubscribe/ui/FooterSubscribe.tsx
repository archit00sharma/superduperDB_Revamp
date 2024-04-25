import { SubscribeForm } from 'features/SubscribeForm';

import './footer-subscribe.scss';

const FooterSubscribe = () => (
  <div className="footer-subscribe__container">
    <div className="footer-subscribe__text">
      <h3>Stay in the loop</h3>
      <p>Sign up for our mailing list for the latest news, updates, features and integrations.</p>
    </div>
    <SubscribeForm className="footer-subscribe__form" />
  </div>
);

export default FooterSubscribe;
