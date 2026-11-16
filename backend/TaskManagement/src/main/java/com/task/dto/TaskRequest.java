package com.task.dto;

import com.task.entity.TaskMedium;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TaskRequest {
	
	private String taskName;
	private String tasklevel;
	private String taskprogress;
	
	private String difficults;

}
