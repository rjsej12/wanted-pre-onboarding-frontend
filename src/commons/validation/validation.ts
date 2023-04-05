const email = (value: string) => {
  return value.includes('@') ? '' : '이메일은 @를 포함해야 합니다.';
};

const password = (value: string) => {
  return value.length >= 8 ? '' : '비밀번호는 8자리 이상이여야 합니다.';
};

interface IValidator {
  [key: string]: any;
  email: (value: string) => '' | '이메일은 @를 포함해야 합니다.';
  password: (value: string) => '' | '비밀번호는 8자리 이상이여야 합니다.';
}

export const Validator: IValidator = { email, password };
