import { FC, ReactNode } from 'react';

import './text-button.scss';

interface TextButtonProps {
  children: ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

const TextButton: FC<TextButtonProps> = ({ children, disabled, onClick }) => {
  return (
    <button type="button" onClick={onClick} disabled={disabled} className="text-button">
      {children}
    </button>
  );
};

export default TextButton;
