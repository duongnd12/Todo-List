import React from "react";
import TodoItem, { ITodoItemProps } from "../todo-item/todo-item.component";
import styled from 'styled-components'

interface ITodoListProps {
  items: ITodoItemProps[];
}

const TodoListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const TodoList = (props: ITodoListProps) => {
  return (
    <TodoListContainer>
      {props.items.map((item) => (
        <TodoItem
          isChecked={item.isChecked}
          todoTitle={item.todoTitle}
          todoTime={item.todoTime}
        />
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
