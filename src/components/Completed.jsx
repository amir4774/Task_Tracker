import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeEye } from "../Redux/ChangeSlice";
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';

const Completed = ({ cssClass }) => {
    
    const tasks = useSelector(state => state.task.tasks);
    const completed = useSelector(state => state.complete.completed);
    const change = useSelector(state => state.eye.change);
    const dispatch = useDispatch()

    // Show Completed
    const onChange = () => {
        dispatch(changeEye());
    }

    return (
        <button onClick={() => onChange()} className={cssClass} style={{ color: "gray", width: '150px' }} >
            <span style={{ marginRight: '5px' }} >
                {change ? <FaEyeSlash /> : <FaEye />}
            </span>
            Completed {completed.length} of {tasks.length}
        </button>
    )
}

export default Completed;