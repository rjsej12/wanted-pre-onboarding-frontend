import { useNavigate } from 'react-router-dom';
import { authAPI } from '../../../commons/api/auth';
import SignInUI from './SignIn.presenter';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Validator } from '../../../commons/validation/validation';
import { ISignInProps } from './SignIn.types';

export default function SignIn(props: ISignInProps) {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const isAble =
    [inputs.email, inputs.password].every((value) => value !== '') &&
    [errors.email, errors.password].every((value) => value === '');

  const handleSubmitSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await authAPI.signIn({ email: inputs.email, password: inputs.password });
    if (res?.status === 401) {
      alert('이메일 혹은 비밀번호가 잘못되었습니다');
      return;
    }

    return navigate('/todo');
  };

  const handleSubmitSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await authAPI.signUp({ email: inputs.email, password: inputs.password });
    if (res?.status === 400) {
      alert(res.data.message);
      return;
    }

    return navigate('/signin');
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    setErrors({ ...errors, [name]: Validator[name](value) });
  };

  return (
    <SignInUI
      handleSubmit={props.isSignUp ? handleSubmitSignUp : handleSubmitSignIn}
      handleChangeInput={handleChangeInput}
      emailError={errors.email}
      passwordError={errors.password}
      isDisabled={!isAble}
      isSignUp={props.isSignUp}
    />
  );
}
