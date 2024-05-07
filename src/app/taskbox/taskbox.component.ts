import { Component, Input, OnInit } from '@angular/core';
import { Task } from './task';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-taskbox',
  templateUrl: './taskbox.component.html',
  styleUrls: ['./taskbox.component.css']
})
export class TaskboxComponent implements OnInit {
  @Input() headline: string = ''; 
  tasks: Task[] = [];
  newTaskName: string = '';
  newTaskCategory: string = '';
  newTaskStartDate: string = '';
  newTaskEndDate: string = '';
  @Input() dodawanie: boolean = true;
  @Input() backgroundColor: string = 'rgba(55, 48, 163, 1)';
  @Input() statuses: string[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.tasks$.subscribe((tasks) => {
      this.tasks = tasks.filter(task => task.status === this.headline);
    });
  }

  addTask() {
    if (this.newTaskName.trim() !== '') {
      this.taskService.addTask({
        id: this.generateId(),
        name: this.newTaskName,
        category: this.newTaskCategory,
        startDate: this.newTaskStartDate,
        endDate: this.newTaskEndDate,
        isEditing: false,
        status: this.headline
      });
      this.newTaskName = '';
      this.newTaskCategory = '';
      this.newTaskStartDate = '';
      this.newTaskEndDate = '';
    }
  }

  editTask(taskId: string) {
    const task = this.tasks.find(task => task.id === taskId);
    if (task) {
      task.isEditing = true;
    }
  }

  saveTask(taskId: string, newName: string) {
    if (newName.trim() !== '') {
      this.taskService.updateTask(taskId, newName);
      const task = this.tasks.find(task => task.id === taskId);
      if (task) {
        task.isEditing = false;
      }
    }
  }

  removeTask(taskId: string) {
    this.taskService.removeTask(taskId);
  }

  updateTaskStatus(taskId: string, newStatus: string | undefined) {
    if (newStatus) {
      this.taskService.updateTaskStatus(taskId, newStatus);
    }
  }

  private generateId(): string {
    // Generates a pseudo-random string to use as a unique task ID
    return Math.random().toString(36).substring(2, 9);
  }
}