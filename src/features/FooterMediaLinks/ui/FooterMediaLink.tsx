import Link from 'next/link';
import { FC } from 'react';

interface FooterMediaLinkProps {
  label: string;
  link: string;
  isExternal: boolean;
}

const FooterMediaLink: FC<FooterMediaLinkProps> = ({ label, link, isExternal }) => {
  return (
    <Link href={link} target={isExternal ? '_blank' : ''} className="footer-media-link">
      {label}
    </Link>
  );
};

export default FooterMediaLink;
