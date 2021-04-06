import React from "react";
import { FaMinus } from "react-icons/fa";
import "./TodoListItem.scss"

const TodoListItem = (props) => {
  const { setter, value } = props;
  const removeItem = (idx) => {
    setter(
      value.filter(item => item.id !== idx)
    );
  }
  return (
    <div className="TodoList">
      {props.value.map(item => {
      const { id, content } = item;
      
      return (
        <div className='TodoItem' key={id}>
        <p>{item.content}</p>
        <button type="submit" value={item.id} onClick={() => removeItem(id)}>
          <FaMinus />
        </button>
      </div>
      )})}
    </div>
  );
};

export default TodoListItem;
