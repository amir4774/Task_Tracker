import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";

const App = () => {
  const tasks = useSelector(state => state.task.tasks);
  
  return (
    <div className="container">
      <Header />
      <div className="tasks-manage">
        {tasks.length > 0 ? <Tasks /> : <p className="text">What is your next challenge?</p>}
      </div>
      <Footer />
    </div>
  )
}

export default App;