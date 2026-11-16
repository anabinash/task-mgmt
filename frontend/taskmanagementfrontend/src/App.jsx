import { BrowserRouter,Routes, Navigate,Route } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Navbar from './components/Navbar';


function App() {
  

  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Navigate to="/tasks"/>}/>
          <Route path="/tasks" element={<TaskList/>}/>
          <Route path="/tasks/add" element={<TaskForm/>}/>
          <Route path="/tasks/edit/:id" element={<TaskForm/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
