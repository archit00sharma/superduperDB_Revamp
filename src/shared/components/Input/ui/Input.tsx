import { FC, FormEvent } from 'react';

import ErrorIcon from 'shared/icons/alert-circle.svg';
import SuccessIcon from 'shared/icons/green-check.svg';

import './input.scss';

interface InputProps {
  type: 'text' | 'email' | 'tel' | 'password';
  value: string;
  placeholder: string;
  dataTestId?: string;
  isDisabled?: boolean;
  isValid?: boolean;
  error?: string;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
  onBlur?: (e: FormEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  type = 'text',
  value,
  placeholder,
  dataTestId,
  isDisabled,
  isValid,
  error,
  onChange,
  onBlur,
}) => {
  return (
    <div className="input__container">
      <input
        value={value}
        className={`${error ? 'input__error' : 'name-value'}`}
        type={type}
        placeholder={placeholder}
        data-testid={dataTestId}
        disabled={isDisabled}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <div className="input__error-message grotesk">{error}</div>}
      {error && (
        <div className="input__icon">
          <ErrorIcon />
        </div>
      )}
      {isValid && (
        <div className="input__icon">
          <SuccessIcon />
        </div>
      )}
    </div>
  );
};

export default Input;
