import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  const name =  "Stephen"

  const [showAddTask, setShowAddTask] = useState(true)

  const [taskArr, setTask] = useState([
      {
          id: 1,
          text:"Hello Task 1",
          day: "Sept 14, 2022",
          reminder: false
      },
      {
          id: 2,
          text:"Hello Task 2",
          day: "Oct 21, 2023",
          reminder: true
      },
  ])

  const addTask = (t) => {
    const id = Math.floor(Math.random()*10000)+1;
    const newTask = {id, ...t}
    setTask([...taskArr, newTask])
    console.log('Adding ', newTask)
  };

  const deleteTask = (id) => {
    console.log('delete', id);
    setTask(taskArr.filter((t)=> t.id !== id));
  };

  const toggleReminder = (id) => {
    console.log('toggle', id);
    setTask(taskArr.map((t) => (t.id===id) ? {...t, reminder: !t.reminder}: t));
    console.log(taskArr.filter((t)=>t.id===id));
  };

  return (
    <div className="App">
      <Header 
        title='Insert Title Here' 
        onAdd={() => setShowAddTask(!showAddTask)} 
        showAddTask = {showAddTask}
      />
      <h1>Hello World</h1>
      <h2>This is from {name}.</h2>

      {showAddTask && <AddTask onAdd={addTask}/>}
      

      {taskArr.length > 0 ? 
        <Tasks 
          taskArr={taskArr} 
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
        :
        <h3>No Tasks to Show</h3>
      }
     
    </div>
  );
}

export default App;
