import { FC } from 'react';

import './burger-menu.scss';

interface BurgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
}

const BurgerMenu: FC<BurgerMenuProps> = ({ isOpen, onClick }) => {
  return (
    <div className={`burger-btn ${isOpen ? 'burger-btn_active' : ''}`} onClick={onClick}>
      <span className="burger-btn__line"></span>
      <span className="burger-btn__line"></span>
      <span className="burger-btn__line"></span>
      <span className="burger-btn__line"></span>
    </div>
  );
};

export default BurgerMenu;
