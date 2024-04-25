import React from 'react';

import { links } from 'shared/constants';

import './footer-media-links.scss';
import FooterMediaLink from './FooterMediaLink';

const mediaLinksData = [
  {
    label: 'Blog',
    link: links.blog,
    isExternal: false,
  },
  {
    label: 'Youtube',
    link: links.youtube,
    isExternal: true,
  },
  {
    label: 'Twitter/X',
    link: links.twitter,
    isExternal: true,
  },
];

const FooterMediaLinks = () => {
  return (
    <div className="footer-media-links">
      {mediaLinksData.map((mediaLink, idx) => {
        return (
          <React.Fragment key={mediaLink.link}>
            <FooterMediaLink {...mediaLink} />
            {idx < mediaLinksData.length - 1 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
              >
                <circle cx="3" cy="3" r="3" fill="currentColor" />
              </svg>
            ) : null}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default FooterMediaLinks;
