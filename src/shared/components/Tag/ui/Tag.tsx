import { FC } from 'react';

import './tag.scss';

type TagProps = {
  name: string;
  isActive?: boolean;
  onClick?: (name: string) => void;
  size?: 'small' | 'big';
};

const Tag: FC<TagProps> = ({ name, isActive = false, onClick = () => null, size = 'small' }) => (
  <div
    key={name}
    className={`tag ${isActive ? 'tag_active' : ''} tag_${size}`}
    onClick={() => onClick(name)}
  >
    {name}
  </div>
);

export default Tag;
