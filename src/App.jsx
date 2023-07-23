import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Add Task
  const addTask = (id, text) => {
    setTasks(
      tasks.map(task => task.id === id ? { ...task, body: text} : task)
    )
  }

  // Add Check
  const addCheck = (id, newCheck) => {
    setTasks(
      tasks.map(task => {
        if(task.id === id) {
          if(task.body !== '') { // Empty
            return { ...task, checked: newCheck }
          } else {
            return task
          }
        } else {
          return task;
        }
      })
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
  }

  return (
    <div className="container">
      <Header />
      <div className="tasks-manage">
        {tasks.length > 0 ? <Tasks tasks={tasks} onAdd={addTask} onDelete={deleteTask} onCheck={addCheck} /> : <p className="text">What is your next challenge?</p>}
      </div>
      <Footer onShow={showTask} />
    </div>
  )
}

export default App;