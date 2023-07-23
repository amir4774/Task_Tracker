import { FaTimes } from "react-icons/fa";

const Button = ({ text, cssClass, onShow }) => {
  return (
    <button className={cssClass} onClick={() => onShow({ body: '' })}>
      <FaTimes className="plus"/>
      {text}
    </button>
  )
}

export default Button;