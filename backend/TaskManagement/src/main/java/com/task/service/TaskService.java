package com.task.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.task.dto.TaskRequest;
import com.task.entity.Task;
import com.task.entity.TaskMedium;
import com.task.repo.TaskRepository;

@Service 
public class TaskService {
	
	@Autowired
	TaskRepository taskRepo;
	

	public Task addTask(TaskRequest request) {
		   
		TaskFactory factory=new TaskFactory();
		
		Task task=factory.createTasks(request.getTaskName(),
				request.getTasklevel(), 
				request.getTaskprogress(), 
				request.getDifficults());
		
		return taskRepo.save(task);
	}
	
	
	// update task 
	public Task updateTask(Long id, TaskRequest request) {
		  Task newTask=taskRepo.findById(id).get();
		  
		      
		       
		      if(newTask.getTaskId()==id) {
		    	  
		    	 newTask.setTaskName(request.getTaskName());
		    	 newTask.setTaskLevel(request.getTaskprogress());
		    	 newTask.setTaskProgress(request.getTaskprogress());
		    	 newTask.setDifficult(TaskMedium.valueOf(request.getDifficults()));
		    	  return taskRepo.save(newTask);
		      }
		      
		      return newTask;  
	}
	
	// get ALl taskes
	
	public List<Task> getAllTasks() {
		List<Task> listTask=taskRepo.findAll();
		
		return listTask;
	}
	
	// delete the tasks
	public String  removeTasks(long id ) {
		  Task newTask= taskRepo.findById(id).orElseThrow(()->new RuntimeException("Id not Found !"));
		  taskRepo.deleteById(id);  
		  return "delete done !";
	   }
	
	// find by ID 
	public Task getTaskById(long id) {
		return taskRepo.findById(id).get();
	}
	
	
	
}
