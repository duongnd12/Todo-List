import React, { useState } from "react";

import classes from "./todo-item.module.css";
import styled from "styled-components";

export interface ITodoItemProps {
  isChecked: boolean;
  todoTitle: string;
  todoTime: string;
}

const TodoItemContainer = styled.div`
  background: lightgreen;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  padding: 10px;
  color: white;
`;

const TodoItem = (props: ITodoItemProps) => {
  const [isTodoChecked, setTodoCheck] = useState(props.isChecked);
  return (
    <TodoItemContainer>
      <input
        defaultChecked={props.isChecked}
        onChange={(e) => {
          setTodoCheck(e.target.checked);
        }}
        type="checkbox"
        checked={isTodoChecked}
      />
      <p>{props.todoTitle}</p>
      <p>{props.todoTime}</p>
      <p>{ isTodoChecked && 'Da hoan thanh' }</p>
    </TodoItemContainer>
  );
};

export default TodoItem;
