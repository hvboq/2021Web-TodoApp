import React from 'react';
import './TodoTemplate.scss';
import TodoInsert from './TodoInsert';
import TodoListItem from './TodoListItem';

const TodoTemplate = ({children}) => {
    return(
        <div className='TodoTemplate'>
            <h1>Todo 만들기</h1>
            <p>{children}</p>
            <TodoInsert/>
            <TodoListItem/>
        </div>
    );
}

export default TodoTemplate;