import { FormEvent, useCallback, useState } from 'react';

import { validateEmail } from 'shared/utils';

const invalidEmailText = 'Error! Invalid email!';

const useSubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState<undefined | boolean>();
  const [error, setError] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleEmailOnChange = useCallback((e: FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
    setError('');
  }, []);

  const handleOnBlur = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      if (!email) return;
      const isValid = validateEmail(e.currentTarget.value);

      if (!isValid) {
        setError(invalidEmailText);
        setIsValid(false);

        return;
      }

      setIsValid(isValid);
    },
    [email],
  );

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSending(true);

      const isValid = validateEmail(email);

      if (!isValid) {
        setError(invalidEmailText);
        setIsValid(false);
        setIsSending(false);

        return;
      }

      setIsValid(isValid);

      try {
        const response = await fetch('/api/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify({ email }),
        });

        const result = await response.json();

        if (!result.success) setError((result as IError).message);
        setIsSending(false);
        setEmail('');
        setIsValid(undefined);
      } catch (error) {
        setError((error as IError)?.message ?? error);
        setIsSending(false);
      }
    },
    [email],
  );

  return {
    email,
    error,
    isSending,
    isValid,
    handleEmailOnChange,
    handleOnBlur,
    handleSubmit,
  };
};

export default useSubscribeForm;
