import * as S from './TodoItem.style';
import { MdDone } from 'react-icons/md';
import { ITodoItemUIProps } from './TodoItem.types';

export default function TodoItemUI(props: ITodoItemUIProps) {
  const { isCompleted, todo } = props.todo;

  return (
    <S.ItemWrapper>
      {props.isEditing ? (
        <S.ModifyInput
          data-testid="modify-input"
          type="text"
          onChange={props.handleChangeModifyInput}
          value={props.updateTodo}
        />
      ) : (
        <S.Label onClick={props.handleClickCheckbox}>
          <S.CheckCircle checked={isCompleted}>{isCompleted && <MdDone />}</S.CheckCircle>
          <S.Checkbox type="checkbox" checked={isCompleted} />
          <S.TodoText>{todo}</S.TodoText>
        </S.Label>
      )}
      <S.ButtonWrapper>
        {props.isEditing ? (
          <>
            <S.SubmitButton data-testid="submit-button" onClick={props.handleClickSubmitButton}>
              제출
            </S.SubmitButton>
            <S.CancelButton data-testid="cancel-button" onClick={props.handleClickCancelButton}>
              취소
            </S.CancelButton>
          </>
        ) : (
          <>
            <S.ModifyButton data-testid="modify-button" onClick={props.handleClickModifyButton}>
              수정
            </S.ModifyButton>
            <S.DeleteButton data-testid="delete-button" onClick={props.handleClickDeleteButton}>
              삭제
            </S.DeleteButton>
          </>
        )}
      </S.ButtonWrapper>
    </S.ItemWrapper>
  );
}
