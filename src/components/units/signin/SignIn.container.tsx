import { useNavigate } from 'react-router-dom';
import { authAPI } from '../../../commons/api/auth';
import SignInUI from './SignIn.presenter';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Validator } from '../../../commons/validation/validation';

export default function SignIn() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const isAble =
    [inputs.email, inputs.password].every((value) => value !== '') &&
    [errors.email, errors.password].every((value) => value === '');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await authAPI.signIn({ email: inputs.email, password: inputs.password });
    console.log(res?.status);
    if (res?.status === 401) {
      alert('이메일 혹은 비밀번호가 잘못되었습니다');
      return;
    }

    localStorage.setItem('accessToken', res?.data.access_token);
    return navigate('/todo');
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    setErrors({ ...errors, [name]: Validator[name](value) });
  };

  return (
    <SignInUI
      handleSubmit={handleSubmit}
      handleChangeInput={handleChangeInput}
      emailError={errors.email}
      passwordError={errors.password}
      isDisabled={!isAble}
    />
  );
}
