import React, { useState } from "react";
import { IContactItemProps } from "../contact-item/contact-item.component";
import ContactList from "../contact-list/contact-list.component";
import { ITodoItemProps } from "../todo-item/todo-item.component";
import TodoList from "../todo-list/todo-list.component";

const App = () => {
  // const [todoItems, setTodoItems] = useState<ITodoItemProps[]>([]);
  // const [inputValue, setInputValue] = useState("");

  const [contactItems, setContactItems] = useState<IContactItemProps[]>([]);
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  return (
    <div>
      <input type="text" value={name} placeholder="Name" onChange={(e) => {
        setName(e.target.value)
      }}/>
      <input type="text" value={phoneNumber} placeholder="Phone number" onChange={
        (e) => {setPhoneNumber(e.target.value)}
      }/>
      <button onClick={() => {
        const newContactItem: IContactItemProps = {
          name: name,
          phoneNumber: phoneNumber
        }
        setContactItems([...contactItems, newContactItem])
      }}>Add</button>

      <ContactList items={contactItems}/>
      {/* <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
      />
      <button
        onClick={() => {
          //   const x = [1, 2, 3];
          //   const u = [...x]; // u = [1,2,3]
          const newTodoItem: ITodoItemProps = {
            todoTitle: inputValue,
            isChecked: true,
            todoTime: new Date().toISOString(),
          };

          setTodoItems([...todoItems, newTodoItem]);
        }}
      >
        Add
      </button>
      <TodoList items={todoItems} /> */}
    </div>
  );
};

export default App;
