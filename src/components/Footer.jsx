import { useSelector } from "react-redux";
import Button from "./Button";
import Completed from "./Completed";

const Footer = () => {
  
  const tasks = useSelector(state => state.task.tasks);
  
  return (
    <footer className="footer">
      {tasks.length > 0 ? <Completed cssClass={'btn btn-footer'} /> : <p style={{ color: 'gray' }}>No tasks</p>}
      <Button text={'Add task'} cssClass={'btn btn-footer'} />
    </footer>
  )
}

export default Footer
