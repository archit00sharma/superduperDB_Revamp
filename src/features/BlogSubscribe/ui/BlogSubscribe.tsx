/* eslint-disable prettier/prettier */
import { SubscribeForm } from 'features/SubscribeForm';
// import PythonHeadIcon from 'shared/icons/python-head.svg';

import './blog-subscribe.scss';

const BlogSubscribe = () => (
  <div className="blog-subscribe__container">
    <div className="blog-subscribe__content">
      {/* <PythonHeadIcon /> */}
      <span className="blog-subscribe__icon">📣</span>
      <span className="blog-subscribe__title">Don’t miss something new from SuperDuperDB</span>
      <p>
        Sign up for our mailing list to receive the latest news, updates, features and integrations.
      </p>
    </div>
    <SubscribeForm className="blog-subscribe__form" />
  </div>
);

export default BlogSubscribe;
