
import Task from './Task';

const TaskList=({tasks,deleteTask}) => {
  
    return (
      <ul className="todo-list">
         {tasks.map(task => (
          <Task task={task} key={task.id} deleteTask={deleteTask} />
        ))} 
      </ul>
    );
  }
export default TaskList;
