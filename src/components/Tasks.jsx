import { useSelector } from "react-redux";
import Task from "./Task";

const Tasks = () => {

  const tasks = useSelector(state => state.task.tasks);
  const change = useSelector(state => state.eye.change);
  const completed = useSelector(state => state.complete.completed); 

  return (
    <>
      {change && completed.length === tasks.length ? <p className="text">All done. Enjoy your time!</p> :
        tasks.map((task, index) => <Task task={task} key={index} />)}
    </>
  )
}

export default Tasks;