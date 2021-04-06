import React, { useState } from "react";
import { FaMinus } from "react-icons/fa";
import "./TodoListItem.scss"

const TodoListItem = (props) => {
  const [delIdx, setIdx] = useState(0);
  const removeItem = (e) => {
    setIdx(e.target.value);
    console.log(delIdx);
    props.setter(
      props.value.filter(item => {
        return item.id != delIdx
      })
    );
  }
  return (
    <div className="TodoList">
      {props.value.map(item => { return (
        <div className='TodoItem' >
        <p>{item.content}</p>
        <button type="submit" value={item.id} onClick={removeItem}>
          <FaMinus />
        </button>
      </div>
      )})}
    </div>
  );
};

export default TodoListItem;
