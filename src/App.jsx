import Taskform from "./Components/Taskform";
import Tasklist from "./Components/Tasklist";
import Progresstracker from "./Components/Progresstracker";


function App() {
  return(
    <div>
      <h1>Aura Tasks</h1>
      <p>Our friendly TaskManager</p>
      <Taskform />
      <Tasklist />
      <Progresstracker />
      <button>Clear all tasks</button>
    </div>
  )
}

export default App;