import Link from 'next/link';
import { FC } from 'react';

import { Button } from 'shared/components/Button';
import { TextButton } from 'shared/components/TextButton';
import { links } from 'shared/constants';
import GithubIcon from 'shared/icons/github-original.svg';
import SlackIcon from 'shared/icons/slack-original.svg';
import TopRightIcon from 'shared/icons/top-right-arrow.svg';
import { handleExternalNavigation } from 'shared/utils';

import './header-menu.scss';

const navLinks = [
  {
    label: 'Docs',
    href: links.documentation,
    isExternal: true,
  },
  {
    label: 'Use Cases',
    href: links.use_cases,
    isExternal: true,
  },
  {
    label: 'Blog',
    href: links.blog,
    isExternal: true,
  },
  {
    label: 'Slack',
    href: links.slack,
    isExternal: true,
  },
  {
    label: 'Careers',
    href: links.careers,
    isExternal: true,
  },
  {
    label: 'Contact Us',
    href: links.contact,
    isExternal: true,
  },

];

const communityLinks = [
  {
    link: links.slack,
    label: 'Join our Slack',
    icon: <SlackIcon />,
  },
  {
    link: links.github,
    label: 'Visit our Github',
    icon: <GithubIcon />,
  },
  {
    link: links.contribute,
    label: 'Check out how to contribute',
    icon: <TopRightIcon />,
  },
];

interface HeaderMenuProps {
  isOpen: boolean;
}

const HeaderMenu: FC<HeaderMenuProps> = ({ isOpen }) => {
  const handleGetStartedClick = () => handleExternalNavigation(links.getStarted);

  return (
    <div className={`header-menu__container ${isOpen ? 'active' : ''}`}>
      <nav className="header-menu__wrapper">
        <ul className="header-menu">
          {navLinks.map((link) => (
            <li key={link.href} className="header-menu__item">
              <Link href={link.href} target={link.isExternal ? '_blank' : ''}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="header-menu__buttons-container">
        <Link href="join-beta-waitlist">
          <Button
            label="Join Waitlist"
            variant="outlined"
            fullWidth
          />
        </Link>
        {/* <Button
          label="Pip"
          variant="outlined"
          fullWidth
          onClick={() => handleExternalNavigation(links.pipInstall)}
        /> */}
      </div>
      <div className="header-menu__join-us-container">
        <h3>Join our community</h3>
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

export default HeaderMenu;
