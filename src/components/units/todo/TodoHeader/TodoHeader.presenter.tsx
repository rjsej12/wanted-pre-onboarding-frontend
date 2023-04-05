import * as S from './TodoHeader.style';

export default function TodoHeaderUI(props: any) {
  return (
    <S.Header>
      <S.TitleWrapper>
        <S.InnerLogo />
        <S.Title>Todos</S.Title>
      </S.TitleWrapper>
      <S.AddTodoForm onSubmit={props.handleSubmit}>
        <S.NewTodoInput
          data-testid="new-todo-input"
          placeholder="할일을 추가하세요"
          onChange={props.handleChangeNewTodo}
          value={props.newTodo}
        />
        <S.AddButton data-testid="new-todo-add-button">추가</S.AddButton>
      </S.AddTodoForm>
    </S.Header>
  );
}
