package com.task.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.task.dto.TaskRequest;
import com.task.entity.Task;
import com.task.service.TaskService;

@RestController
@RequestMapping("/task")
@CrossOrigin(origins = "http://localhost:5173")
public class TaskController {
 
	@Autowired
	TaskService tService;
	
	@PostMapping("/add")
	public Task addingTask(@RequestBody TaskRequest request){
		  return tService.addTask(request);
	}
	
	
	@PutMapping("/update/{id}")
	public Task updateTask(@PathVariable("id") Long id , @RequestBody TaskRequest request) {
		return tService.updateTask(id, request);
	}
	
	@GetMapping("/all")
	public List<Task> findALlTask(){
		return tService.getAllTasks();
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteTasks(@PathVariable("id") long id) {
		return tService.removeTasks(id);
	}
	
	@PostMapping("/get/{id}")
	public Task findTaskById(@PathVariable("id") long id) {
		return tService.getTaskById(id);
	}
	
	
	
	
	
}
