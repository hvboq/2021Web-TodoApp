import React from 'react';
import {MdAdd} from 'react-icons/md';
import '../index';

const TodoInsert = () => {
    return(
        <div className='TodoInsert'>
            <h2>할일 만들기</h2>
            <input placeholder="할일을 입력하세요"/>
            <button type='submit'>
                <MdAdd/>
            </button>
        </div>
    );
}

export default TodoInsert;