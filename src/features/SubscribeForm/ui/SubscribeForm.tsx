/* eslint-disable prettier/prettier */
import { FC } from 'react';

import { Button } from 'shared/components/Button';
import { Input } from 'shared/components/Input';

import useSubscribeForm from '../hook/useSubscribeForm';

type SubscribeFormProps = {
  className?: string;
};

const SubscribeForm: FC<SubscribeFormProps> = ({ className }) => {
  const { email, error, isSending, isValid, handleEmailOnChange, handleOnBlur, handleSubmit } =
    useSubscribeForm();

  return (
    <form onSubmit={handleSubmit} className={className}>
      <Input
        type="email"
        value={email}
        placeholder="Enter your Email"
        isValid={isValid}
        error={error}
        onChange={handleEmailOnChange}
        onBlur={handleOnBlur}
      />
      <Button
        type="submit"
        variant="primary"
        className='send_button'
        label="Send"
        isDisabled={isSending}
        isLoading={isSending}
      />
    </form>
  );
};

export default SubscribeForm;
