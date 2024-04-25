import { FC } from 'react';

import './scheme-card.scss';

export interface SchemeCardProps {
  title: string;
  text: string;
  variant?: 'primary' | 'secondary';
  id: string;
}

const SchemeCard: FC<SchemeCardProps> = ({ title, text, variant = 'secondary', id }) => {
  return (
    <div className={`scheme-card scheme-card_${variant}`} id={id}>
      <span className="scheme-card__title">{title}</span>
      <span className="scheme-card__text">{text}</span>
    </div>
  );
};

export default SchemeCard;
