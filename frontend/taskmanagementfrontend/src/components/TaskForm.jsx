import React,{useState,useEffect} from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { addTask, getTaskById, updateTask } from '../services/TaskService';
import "./TaskForm.css";


export default function TaskForm() {


const navigate=useNavigate();
  const { id } = useParams();
const isEditMode= Boolean(id);

 const [task,setTask]=useState({taskName:"",tasklevel:"",taskprogress:"",difficults:""});

const[loading ,setLoading]=useState(false);
const[error,setError]=useState("");


 useEffect(() => {

        if (isEditMode) {
            loadTask(id);
        }

    }, [id]);



    const loadTask=async(id)=>{
       try{
          setLoading(true);
          const response=await getTaskById(id);
          setTask(response.data);
       }
       catch(error){
         console.log(error);
         setError("unable to load data");
       }
       finally{
         setLoading(false);
       }
    };


 const handleChange=(e)=>{
   const{name,value}=e.target;
   setTask({...task,[name]:value});
 }


 const handleSubmit=async(event)=>{
     event.preventDefault();

     try{
         setLoading(true);
         setError("");
         if(isEditMode){
            await updateTask(id,task);
            console.log("Update is done !")
         }
         else{
           await addTask(task);
         }
         navigate("/tasks");
     }
     catch(error){

      console.log(error);
      setError(isEditMode? "unable to update Task":"UNABLE TO add Task");

     
     }
     finally{
      setLoading(false);
     }
 };


 if(loading && isEditMode && !task.taskName){
  return (
    <div>
      Loading task ..
    </div>  
  );
 }

  
  return (
    
          <div className="form-page">
            <div className="task-form-card">
               {isEditMode ? "Update the Task":"Add New Task"}

               <p className="form-subtitle"> {isEditMode
                        ? "Update the task details below."
                        : "Add a new task to your task list."}</p>
                 {error && (<div className="error-message">{error}</div>)} 


                 <form  onSubmit={handleSubmit}>
                  <div className="form-group">
                      <label>Task Name:</label>
                      <input type="text" name="taskName" value={task.taskName} onChange={handleChange} placeholder='Eneter Task' required/>

                      <div className="form-group">
                        <label>Task Level:</label>
                          <select name="tasklevel" value={task.tasklevel} onChange={handleChange}>
                         <option value="">Select Level</option>
                         <option value="level1">Level 1</option>
                         <option value="level2">Level 2</option>
                         <option value="level3">Level 3</option>
                      </select>
                      </div> 
                      
                      <div className="form-group">
                        <label>Task Progress:</label>
                      <select name="taskprogress" value={task.taskprogress} onChange={handleChange} required>
                        <option>Starts</option>
                        <option>In Progress</option>
                        <option>Completed</option>
                      </select>
                      </div>

                      <div className="form-group">
                        <label>Difficulty </label>
                        <select name='difficults' value={task.difficults} onChange={handleChange} required>
                         <option value="">Select difficulty</option>
                         <option value="HIGH"> High </option>
                         <option value="MEDIUM">Medium</option>
                          <option value="HARD"> Hard </option>
                        </select>
                      </div>

                      <div className="form-buttons"> 
                        <button type='button' onClick={()=>navigate("/tasks")}>Cancel</button>

                        <button type='submit' className="submit-button" disabled={loading} >{loading ? "Saving" : isEditMode  ? "Update Task":"Add Task"}</button>
                         
                      </div>
                      <div>
                           
                      </div>
                  </div>
                  </form>     
            </div>
          </div>
  
  )
}
