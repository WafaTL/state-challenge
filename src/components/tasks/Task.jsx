import { useState } from "react"


const Task=({task,deleteTask}) => {
  const{taskName,id}=task
 const[isDone,setIsDone]=useState(false)
  
  const onDeleteClicked=()=>{
    deleteTask(id)
  }
  
  const onTaskCompleted=()=>setIsDone(!isDone)
 
    return (
      <li>
        <span
           className={isDone && 'completed'}
           onClick={onTaskCompleted}
        >
          {taskName}
        </span>
        <i className="fa-solid fa-trash-can" onClick={onDeleteClicked}></i>
      </li>
    );
  }
export default Task;