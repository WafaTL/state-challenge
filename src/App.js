import { useState } from 'react';
import { Fragment} from 'react';
import './App.css';
import AddTask from './components/tasks/AddTask';
import TaskList from './components/tasks/TaskList';

 const App = ()=> {
  const[tasks,setTasks]=useState([{id:1,taskName:'task1'},{id:2,taskName:'task2'},{id:3,taskName:'task3'}])
 const addTask=task=>{
  setTasks([...tasks,task])
}
  const deleteTask=(id)=>setTasks(prev=>prev.filter(task=>task.id!== id))
  
    return (
      <Fragment>
        <AddTask addTask={addTask} />
        {/* <TaskList tasks={tasks} deleteTask={this.deleteTask} /> */}
        <TaskList  tasks={tasks} deleteTask={deleteTask}/>
      </Fragment>
    );
  }


export default App;
