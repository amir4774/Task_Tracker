import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [change, setChange] = useState(false);

  // Show Completed
  const changeEye = () => {
    setChange(!change);
  }

  // Add Text To Body
  const addTask = (id, text) => {
    setTasks(
      tasks.map(task => task.id === id ? { ...task, body: text} : task)
    )
  }

  // Add Check
  const addCheck = (id, newCheck) => {
    // Handle Completed
    if(newCheck) {
      const newCompleted = {...newCheck, id: id};
      setCompleted([...completed, newCompleted])
    }
    else {
      setCompleted(
        completed.filter(comp => comp.id !== id)
      )
    }
    // Handle Tasks
    setTasks(
      tasks.map(task => task.id === id ? {...task, checked: newCheck} : task)
    )
  }

  // Show Task
  const showTask = (newTask) => {
    newTask = {...newTask, id: Math.floor(Math.random() * 1000) + 1, checked: false}
    setTasks(
      [...tasks, newTask]
    )
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
    setCompleted(completed.filter(comp => comp.id !== id))
  }

  return (
    <div className="container">
      <Header />
      <div className="tasks-manage">
        {tasks.length > 0 ? <Tasks
                                  tasks={tasks}
                                  onAdd={addTask} 
                                  onDelete={deleteTask} 
                                  onCheck={addCheck} 
                                  onCompleted={change} 
                                  onAllChecked={completed.length === tasks.length}/> 
                                  : <p className="text">What is your next challenge?</p>}
      </div>
      <Footer onShow={showTask} tasks={tasks} completed={completed.length} change={change} onChange={changeEye} />
    </div>
  )
}

export default App;