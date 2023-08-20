import { useDispatch } from "react-redux";
import { showTask } from "../Redux/TasksSlice";
import { FaTimes } from "react-icons/fa";

const Button = ({ text, cssClass }) => {

  const dispatch = useDispatch();

  // Show Task
  const onShow = (newTask) => {
    newTask = {...newTask, id: Math.floor(Math.random() * 1000) + 1, checked: false}
    dispatch(showTask(newTask));
  }

  return (
    <button className={cssClass} onClick={() => onShow({ body: '' })}>
      <FaTimes className="plus"/>
      {text}
    </button>
  )
}

export default Button;