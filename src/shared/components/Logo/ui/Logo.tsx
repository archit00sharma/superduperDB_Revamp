import Link from 'next/link';

import LogoAsset from 'shared/icons/logo.svg';
import FooterLogoAsset from 'shared/icons/logo2.svg'

import './logo.scss';

interface LogoProps {
  section?: string | null;
}

const Logo: React.FC<LogoProps> = ({ section = null }) => (
  <Link href="/" className="logo">
    {section === 'footer' ? <FooterLogoAsset /> : <LogoAsset />}
  </Link>
);

export default Logo;
