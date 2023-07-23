import Task from "./Task";

const Tasks = ({ tasks, onAdd, onDelete, onCheck, onCompleted, onAllChecked }) => {
  return (
    <>
      {onCompleted && onAllChecked ? <p className="text">All done. Enjoy your time!</p> : 
                                                   tasks.map((task, index) => 
                                                   <Task 
                                                    task={task} 
                                                    onAdd={onAdd} 
                                                    onDelete={onDelete} 
                                                    onCheck={onCheck} 
                                                    onCompleted={onCompleted} 
                                                    key={index} />)}
    </>
  )
}

export default Tasks;