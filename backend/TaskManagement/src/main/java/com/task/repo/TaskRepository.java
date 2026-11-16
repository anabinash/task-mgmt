package com.task.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.task.entity.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {

}
