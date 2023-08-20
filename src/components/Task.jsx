import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, addCheck } from '../Redux/TasksSlice';
import { removeCheck, addCheckCompleted } from '../Redux/CompletedSlice';
import { FaTimes } from 'react-icons/fa';

const Task = ({ task }) => {

  const dispatch = useDispatch();
  const change = useSelector(state => state.eye.change);

  // Add Text To Body
  const addTaskHandler = (text) => {
    const newData = {
      id: task.id,
      text
    }
    dispatch(addTask(newData));
  }

  // Delete Task
  const deleteTaskHandler = (id) => {
    dispatch(deleteTask(id));
    dispatch(removeCheck(id));
  }

  // Add Check
  const addCheckHandler = (newCheck) => {
    // Handle Completed
    if (newCheck) {
      const newCompleted = { ...newCheck, id: task.id };
      dispatch(addCheckCompleted(newCompleted));
    }
    else {
      dispatch(removeCheck(task.id));
    }

    // Handle Tasks
    const newData = {
      id: task.id,
      newCheck
    }
    dispatch(addCheck(newData));
  }

  return (
    <div className={`task ${task.checked && change ? 'completed' : ''}`}>
      <input type="checkbox" className="check-box" value={task.checked} checked={task.checked} onChange={(e) => addCheckHandler(e.currentTarget.checked)} />
      <input type="text" placeholder="Title..." className={`input-text ${task.checked ? 'checked' : ''}`} value={task.body} onChange={(e) => addTaskHandler(e.target.value)} />
      <div className='delete'>
        <FaTimes onClick={() => deleteTaskHandler(task.id)} className='delete-btn' />
      </div>
    </div>
  )
}

export default Task;