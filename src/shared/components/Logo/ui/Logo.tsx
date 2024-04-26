import Link from 'next/link';

import FooterLogoAsset from 'shared/icons/logo2.svg'
import LogoAsset from 'shared/icons/purple-white.svg';

import './logo.scss';

interface LogoProps {
  section?: string | null;
}

const Logo: React.FC<LogoProps> = ({ section = null }) => (
  <Link href="/" className="purple-white-1-icon">
    {section === 'footer' ? <FooterLogoAsset /> : <LogoAsset />}
  </Link>
);

export default Logo;
