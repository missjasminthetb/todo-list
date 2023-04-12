import React, {Fragment} from "react";
import { useState } from 'react'

// const [isChecked, setIsCheckedtem] = useState(false)

const TodoItem = (props) => {
  return (
    <>
      <div className="todo-item" >
        <input type="checkbox" id="box" ></input>
        <p className="ml-1">{props.item.item}</p>
        <button className="delete" onClick={props.onChange}>Delete</button>
      </div>
    </>
  );
};

export default TodoItem;
