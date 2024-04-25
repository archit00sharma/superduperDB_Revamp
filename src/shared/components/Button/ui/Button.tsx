import { FC, ReactNode } from 'react';

import { Loader } from 'shared/components/Loader';

import './button.scss';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outlined' | 'text';
  type?: 'button' | 'submit' | 'reset';
  label: ReactNode | string;
  icon?: ReactNode;
  dataTestId?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  type = 'button',
  label,
  icon = null,
  dataTestId,
  isDisabled,
  isLoading,
  fullWidth,
  className,
  onClick,
}) => {
  return (
    <button
      className={`${variant} ${fullWidth ? 'full-width' : ''} ${className ? className : ''}`}
      type={type}
      data-testid={dataTestId}
      disabled={isDisabled}
      onClick={onClick}
    >
      {isLoading ? <Loader /> : icon}
      {label}
    </button>
  );
};

export default Button;
