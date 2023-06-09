import * as S from './SignIn.style';
import { ISignInUIProps } from './SignIn.types';

export default function SignInUI(props: ISignInUIProps) {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.InnerLogo />
        <S.Title>Todos</S.Title>
      </S.TitleWrapper>
      <S.LoginForm onSubmit={props.handleSubmit}>
        <S.Email
          data-testid="email-input"
          type="text"
          placeholder="이메일을 입력하세요"
          name="email"
          onChange={props.handleChangeInput}
        />
        <S.Error>{props.emailError}</S.Error>
        <S.Password
          data-testid="password-input"
          type="password"
          placeholder="비밀번호를 입력하세요"
          name="password"
          onChange={props.handleChangeInput}
        />
        <S.Error>{props.passwordError}</S.Error>
        {props.isSignUp ? (
          <>
            <S.SignUpButton data-testid="signup-button" disabled={props.isDisabled}>
              가입하기
            </S.SignUpButton>
          </>
        ) : (
          <>
            <S.SignInButton data-testid="signin-button" disabled={props.isDisabled}>
              로그인
            </S.SignInButton>
          </>
        )}
      </S.LoginForm>
      <S.InnerWrapper>
        {props.isSignUp ? (
          <>
            <S.Text>이미 회원이시라면?</S.Text>
            <S.MoveToSignIn to="/signin">로그인</S.MoveToSignIn>
          </>
        ) : (
          <>
            <S.Text>아직 회원이 아니시라면?</S.Text>
            <S.MoveToSignUp to="/signup">회원가입</S.MoveToSignUp>
          </>
        )}
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
