import React, { useState } from 'react';
import {MdAdd} from 'react-icons/md';
import '../index';

const TodoInsert = (props) => {
    
    const [inputText, setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value);
    }
    const insertTodoList = () => {
        props.setter([
            ...props.value,
            {
                id : props.value.length+1,
                content : inputText
            }
        ]);
    }
    return(
        <div className='TodoInsert'>
            <h2>할일 만들기</h2>
            <input name="TodoItem" onChange={onChange} value={inputText} placeholder="할일을 입력하세요"/>
            <button type='submit' onClick={insertTodoList}>
                <MdAdd/>
            </button>
        </div>
    );
}

export default TodoInsert;