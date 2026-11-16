
import React,{useState,useEffect} from 'react';
import {getAllTasks,deleteTask} from '../services/TaskService';
import { useNavigate } from 'react-router-dom';
import "./TaskList.css";

export default function TaskList() {

const [tasks, setTasks] = useState([]);

const [loading, setLoading] = useState(true);

 const [error, setError] = useState("");
 const navigate = useNavigate();

useEffect(()=>{
loadTask();
},[]);

const loadTask=async()=>{
   try{
     setLoading(true);
      const response= await getAllTasks();
      console.log(response.data);
      setTasks(response.data);
   }
   catch(error){
    console.log("error while loading task");
    setError("Unable to load tasks.");
   }
   finally{
       setLoading(false);
   }
};

const handleDelete=async(id)=>{
   
    const confirmdelete=window.confirm("Are you sure to delete this task !");

    if(!confirmdelete){
        return ;
    }
    try{
        await deleteTask(id);
        loadTask();
    }
    catch(error){
        console.log(error);
        setError("unable to delete task");
    }
};

if (loading) {

        return (
            <div className="page-message">
                Loading tasks...
            </div>
        );
    }



  return (

     <div className="task-page">

            <div className="task-header">

                <div>
                    <h1>My Tasks</h1>

                    <p>
                        Manage your tasks and track your progress.
                    </p>
                </div>

                <button
                    className="add-task-button"
                    onClick={() => navigate("/tasks/add")}
                >
                    + Add Task
                </button>

            </div>

            {error && (
                <div className="error-message">
                    {error}
                </div>
            )}

            {tasks.length === 0 ? (

                <div className="empty-state">

                    <h2>No tasks found</h2>

                    <p>
                        You don't have any tasks yet.
                    </p>

                    <button
                        onClick={() => navigate("/tasks/add")}
                    >
                        Create Your First Task
                    </button>

                </div>

            ) : (

                <div className="task-table-container">

                    <table className="task-table">

                        <thead>

                            <tr>    
                                <th>ID</th>
                                <th>Task</th>
                                <th>Level</th>
                                <th>Progress</th>
                                <th>Difficulty</th>
                                <th>Actions</th>
                            </tr>

                        </thead>

                        <tbody>

                            {tasks.map(task => (

                                <tr key={task.taskId}>

                                    <td>
                                        #{task.taskId}
                                    </td>

                                    <td className="task-name">
                                        {task.taskName}
                                    </td>

                                    <td>
                                        {task.taskLevel}
                                    </td>

                                    <td>

                                        <span
                                            className={`status ${task.taskProgress?.toLowerCase()}`}
                                        >
                                            {task.taskProgress}
                                        </span>

                                    </td>

                                    <td>
                                        {task.difficult}
                                    </td>

                                    <td>

                                        <button
                                            className="edit-button"
                                            onClick={() =>
                                                navigate(
                                                    `/tasks/edit/${task.taskId}`
                                                )
                                            }
                                        >
                                            Edit
                                        </button>

                                        <button
                                            className="delete-button"
                                            onClick={() =>
                                                handleDelete(task.taskId)
                                            }
                                        >
                                            Delete
                                        </button>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            )}

        </div>
  );
}
