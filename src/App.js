import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import { useState } from "react";
function App() {
  const [todo, setTodo] = useState([])
  console.log(todo)
  const getItem= (item) =>{
    const todoItem = {
      item,
      isChecked : false,
    }
    setTodo((prevState)=>{
      return [...prevState, todoItem]
    })
    }

    const onChange = (id) => {
      console.log(id);
      setTodo((prevState)=>{
        return prevState.filter((item, index) => {
          return index !== id;
        })
      })
    }

    const onSelectAll = ()=>{
        var box = document.querySelector("#selectAll")
        let checked = true
       
        box.checked ? checked = true : checked = false
       
        var boxes = document.querySelectorAll("#box")
        for (var i = 0; i < boxes.length; i ++){
          boxes[i].checked = checked;
        }
    }

    const clear = ()=>{
      var item = document.querySelectorAll(".todo-item")
      var boxes = document.querySelectorAll("#box")
      let copyTodo = [...todo] 
      console.log(copyTodo)
      // for (let i = 0; i < boxes.length; i++) {
      //   const element = boxes[i];
      //   if(element.checked){
      //     console.log("delete", i)
      //     copyTodo.splice(i, 1)
      //    }
      // }
      // console.log(copyTodo)
      // setTodo(copyTodo)
    }
    
  return (
    <div className="todo">
      <AddTodo item ={getItem}/>
      <div>
        <div className="top">
          <input type='checkbox' id='selectAll' onChange={onSelectAll}></input>
          <div><i className="fa-solid fa-trash" id="bin" onClick={clear}></i></div>
        </div>
        {todo && todo.map((todo, index)=>(
          <TodoItem id={index} key={index} item= {todo}
          onChange={()=>onChange(index)}
          />
          ))}
      </div>
    </div>
  );
}

export default App;
