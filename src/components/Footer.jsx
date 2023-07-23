import Button from "./Button";
import Completed from "./Completed";

const Footer = ({ onShow, tasks, completed }) => {
  return (
    <footer className="footer">
      {tasks.length > 0 ? <Completed cssClass={'btn btn-footer'} all={tasks.length} completed={completed} /> : <p style={{ color: 'gray' }}>No tasks</p>}
      <Button text={'Add task'} cssClass={'btn btn-footer'} onShow={onShow} />
    </footer>
  )
}

export default Footer
