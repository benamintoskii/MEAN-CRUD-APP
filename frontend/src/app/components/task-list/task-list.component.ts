import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  loading = true;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks(): void {
    this.loading = true;
    this.taskService.getTasks().subscribe({
      next: (data) => {
        this.tasks = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching tasks', err);
        this.loading = false;
      }
    });
  }

  toggleCompletion(task: Task): void {
    if (!task._id) return;
    const updatedTask = { ...task, completed: !task.completed };
    this.taskService.updateTask(task._id, updatedTask).subscribe({
      next: (res) => {
        const index = this.tasks.findIndex(t => t._id === task._id);
        if (index !== -1) {
          this.tasks[index] = res;
        }
      },
      error: (err) => console.error('Error updating task status', err)
    });
  }

  deleteTask(id: string | undefined): void {
    if (!id) return;
    this.taskService.deleteTask(id).subscribe({
      next: () => {
        this.tasks = this.tasks.filter(t => t._id !== id);
      },
      error: (err) => {
        console.error('Error deleting task', err);
      }
    });
  }
}
