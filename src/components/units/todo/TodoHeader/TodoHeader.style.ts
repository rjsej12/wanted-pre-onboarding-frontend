import styled from '@emotion/styled';
import { RiCalendarTodoLine } from 'react-icons/ri';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
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

export const AddTodoForm = styled.form`
  display: flex;
  gap: 20px;
`;

export const NewTodoInput = styled.input`
  width: 320px;
  height: 32px;
  padding-left: 20px;
`;

export const AddButton = styled.button`
  height: 32px;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  background-color: #ffd600;
  cursor: pointer;
`;
