import styled from '@emotion/styled';
import { RiCalendarTodoLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 200px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const Title = styled.h1`
  font-size: 28px;
`;

export const InnerLogo = styled(RiCalendarTodoLine)`
  font-size: 28px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 240px;
  margin-top: 20px;
`;

export const Email = styled.input`
  padding: 12px 12px;
  width: 100%;
`;

export const Password = styled.input`
  padding: 12px 12px;
  width: 100%;
`;

export const Name = styled.input`
  padding: 12px 12px;
  width: 100%;
`;

export const Error = styled.div`
  color: red;
  font-size: 12px;
`;

export const LoginButton = styled.button`
  padding: 16px 10px;
  width: 100%;
  background-color: #ffd600;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  color: #000000;
  font-size: 16px;
`;

export const InnerWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Text = styled.span``;

export const MoveToSignUp = styled(Link)`
  border: none;
  background: none;
  cursor: pointer;
  color: #bdbdbd;
  text-decoration: underline;
  font-size: 16px;
`;
