package com.task.service;

import org.springframework.stereotype.Service;

import com.task.entity.Task;
import com.task.entity.TaskMedium;

@Service
public class TaskFactory {
	
	
	public Task createTasks(String taskName, String Tasklevel,String taskProgress,String diffcult) {
		   
		Task task=new Task();
		
		task.setTaskName(taskName);
		task.setTaskLevel(Tasklevel);
		task.setTaskProgress(taskProgress);
		task.setDifficult(TaskMedium.valueOf(diffcult));
		
		return task;
	}

}
