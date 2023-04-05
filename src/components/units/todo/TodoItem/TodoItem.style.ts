import styled from '@emotion/styled';
import { ICheckCircleProps } from './TodoItem.types';

export const ItemWrapper = styled.li`
  display: flex;
  padding: 4px;
  gap: 40px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: ${(props: ICheckCircleProps) => (props.checked ? '1px solid #ffd600' : '1px solid #ced4da')};
  color: ${(props) => (props.checked ? '#ffd600' : 'black')};
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

export const Checkbox = styled.input`
  display: none;
`;

export const TodoText = styled.span`
  display: inline-block;
  margin-left: 8px;
  width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ModifyInput = styled.input`
  width: 280px;
  height: 32px;
  padding-left: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const ModifyButton = styled.button`
  height: 32px;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  background-color: #ffd600;
  cursor: pointer;
  white-space: nowrap;
`;

export const DeleteButton = styled.button`
  height: 32px;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  background-color: #ffd600;
  cursor: pointer;
  white-space: nowrap;
`;

export const SubmitButton = styled.button`
  height: 32px;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  background-color: #ffd600;
  cursor: pointer;
  white-space: nowrap;
`;

export const CancelButton = styled.button`
  height: 32px;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  background-color: #ffd600;
  cursor: pointer;
  white-space: nowrap;
`;
