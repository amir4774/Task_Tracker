import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';

const Completed = ({ cssClass, all, completed, change, onChange }) => {
    return (
        <button onClick={() => onChange()} className={cssClass} style={{ color: "gray", width: '150px' }} >
            <span style={{ marginRight: '5px' }} >
                {change ? <FaEyeSlash /> : <FaEye />}
            </span>
            Completed {completed} of {all}
        </button>
    )
}

export default Completed;