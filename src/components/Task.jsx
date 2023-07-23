import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onAdd, onDelete, onCheck }) => {

  const sendValue = (text) => {
    onAdd(task.id, text);
  }

  const sendCheck = (newCheck) => {
    onCheck(task.id, newCheck);
  } 

  return (
    <div className="task">
      <input type="checkbox" className="check-box"  value={task.checked} checked={task.checked} onChange={(e) => sendCheck(e.currentTarget.checked)} />
      <input type="text" placeholder="Title..." className={`input-text ${task.checked ? 'checked' : ''}`} value={task.body} onChange={(e) => sendValue(e.target.value)}/>
      <FaTimes onClick={() => onDelete(task.id)} style={{ marginLeft: '30px', color: '#dd0000', cursor: 'pointer'}} />
    </div>
  )
}

export default Task;