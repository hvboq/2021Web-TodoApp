import React from "react";
import { FaMinus } from "react-icons/fa";
import "./TodoListItem.scss"

const TodoListItem = () => {
  return (
    <div className="TodoList">
      <div className='TodoItem'>
        <p>할일 1</p>
        <button type="submit">
          <FaMinus />
        </button>
      </div>
      <div className='TodoItem'>
        <p>할일 2</p>
        <button type="submit">
          <FaMinus />
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
