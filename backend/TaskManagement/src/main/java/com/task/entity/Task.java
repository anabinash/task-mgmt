package com.task.entity;

import jakarta.annotation.Generated;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="tasks")
public class Task {

	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	 private long taskId;
	 
	  private String taskName;
	  
	  private String taskLevel;
	  
	  private String taskProgress;
	  
	  @Enumerated(EnumType.STRING)
	  private TaskMedium difficult;
	   
}
