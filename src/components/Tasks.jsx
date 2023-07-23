import Task from "./Task";

const Tasks = ({ tasks, onAdd, onDelete, onCheck }) => {
  return (
    <>
      {tasks.map((task, index) => <Task task={task} onAdd={onAdd} onDelete={onDelete} onCheck={onCheck} key={index} />)}
    </>
  )
}

export default Tasks;