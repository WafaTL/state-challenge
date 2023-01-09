import { useState } from "react";


const  AddTask =({addTask})=>  {
  const[task,setTask]=useState('')
  const onTaskChanged=(event)=> setTask(event.target.value)

const onAddClicked=()=>{
if (task==='') {
  alert('Please enter a task name')
  
} else {
  const newTask={ 
    id:Math.floor(Math.random() * 1000),
    taskName:task
  };
  addTask(newTask)

}

}
 
    return (
      <div className="my-todos">
        <h1 className="title">My toDo list</h1>
        <div className="input-group">
          <input
            type="text"
             value={task}
            
            onChange={onTaskChanged}
    
            placeholder="Add ToDo..."
          />
          <button className="addBtn" onClick={onAddClicked}>
            Add
          </button>
        </div>
      </div>
    );
  }
export default AddTask;
