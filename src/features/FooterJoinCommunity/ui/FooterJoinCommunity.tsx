import { TextButton } from 'shared/components/TextButton';
import { links } from 'shared/constants';
import GithubIcon from 'shared/icons/github-icon.svg';
import SlackIcon from 'shared/icons/slack-icon.svg';
import TopRightIcon from 'shared/icons/top-right-arrow.svg';
import { handleExternalNavigation } from 'shared/utils';

import './footer-join-community.scss';

const communityLinks = [
  {
    link: links.community,
    label: 'Explore our Community Apps',
    icon: <GithubIcon />,
  },
  {
    link: links.slack,
    label: 'Join our Slack for live chat',
    icon: <SlackIcon />,
  },
  {
    link: links.contribute,
    label: 'Check out how to contribute',
    icon: <TopRightIcon />,
  },
];

const FooterJoinCommunity = () => {
  return (
    <div className="join-community__container">
      <div className="join-community__text">
        <h3>Join our community</h3>
        <p>SuperDuperDB is an open source project. To discuss, get help, or contribute:</p>
      </div>
      <div className="join-community__links">
        {communityLinks.map(({ link, label, icon }) => (
          <TextButton onClick={() => handleExternalNavigation(link)} key={label}>
            {icon}
            {label}
          </TextButton>
        ))}
      </div>
    </div>
  );
};

export default FooterJoinCommunity;
