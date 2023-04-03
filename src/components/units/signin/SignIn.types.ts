import { ChangeEvent, FormEvent } from 'react';

export interface ISignInUIProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  emailError: string;
  passwordError: string;
  isDisabled: boolean;
}
