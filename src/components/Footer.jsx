import Button from "./Button"

const Footer = ({ onShow }) => {
  return (
    <footer className="footer">
      <p style={{ color: 'gray' }}>No tasks</p>
      <Button text={'Add task'} cssClass={'btn btn-footer'} onShow={onShow} />
    </footer>
  )
}

export default Footer
