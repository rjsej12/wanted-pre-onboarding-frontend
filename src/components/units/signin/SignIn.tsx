import * as S from './SignIn.style';

export default function SignIn() {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.InnerLogo />
        <S.Title>Todos</S.Title>
      </S.TitleWrapper>
      <S.LoginForm>
        <S.Email type="text" placeholder="이메일을 입력하세요" />
        <S.Password type="password" placeholder="비밀번호를 입력하세요" />
        <S.LoginButton>로그인</S.LoginButton>
      </S.LoginForm>
      <S.InnerWrapper>
        <S.Text>아직 회원이 아니시라면?</S.Text>
        <S.MoveToSignUp to="/signup">회원가입</S.MoveToSignUp>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
