import { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';

const Completed = ({ cssClass, all, completed }) => {

    const [eye, setEye] = useState(<FaEye />);
    const [change, setChange] = useState(false);
    
    const changeEye = () => {
        change ? setEye(<FaEyeSlash />) : setEye(<FaEye />);
        setChange(!change);
    }

    return (
        <button onClick={() => changeEye()} className={cssClass} style={{ color: "gray", width: '150px' }} >
            <span style={{ marginRight: '5px' }} >
                {eye}
            </span>
            Completed {completed} of {all}
        </button>
    )
}

export default Completed;