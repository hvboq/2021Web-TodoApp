import React, {  useState, useRef } from "react";
import './TodoTemplate.scss';
import TodoInsert from './TodoInsert';
import TodoListItem from './TodoListItem';

const TodoTemplate = ({children}) => {
  const todoRef = useRef(0);
  const [todolist, setTodolist] = useState([]);

    return(
        <div className='TodoTemplate'>
            <h1>Todo 만들기</h1>
            <p>{children}</p>
            <TodoInsert value={todolist} todoRef={todoRef} setter = {setTodolist}/>
            <TodoListItem value = {todolist} setter = {setTodolist} />
        </div>
    );
}

export default TodoTemplate;