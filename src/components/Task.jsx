import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onAdd, onDelete, onCheck, onCompleted }) => {

  const sendValue = (text) => {
    onAdd(task.id, text);
  }

  const sendCheck = (newCheck) => {
    onCheck(task.id, newCheck);
  }

  return (
    <div className={`task ${task.checked && onCompleted ? 'completed' : ''}`}>
      <input type="checkbox" className="check-box" value={task.checked} checked={task.checked} onChange={(e) => sendCheck(e.currentTarget.checked)} />
      <input type="text" placeholder="Title..." className={`input-text ${task.checked ? 'checked' : ''}`} value={task.body} onChange={(e) => sendValue(e.target.value)} />
      <div className='delete'>
        <FaTimes onClick={() => onDelete(task.id)} className='delete-btn' />
      </div>
    </div>
  )
}

export default Task;