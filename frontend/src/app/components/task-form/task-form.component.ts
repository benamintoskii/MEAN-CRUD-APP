import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  task: Task = {
    title: '',
    description: '',
    completed: false
  };
  isEditMode = false;
  taskId: string | null = null;
  loading = false;
  error = '';

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id');
    if (this.taskId) {
      this.isEditMode = true;
      this.fetchTask(this.taskId);
    }
  }

  fetchTask(id: string): void {
    this.loading = true;
    this.taskService.getTask(id).subscribe({
      next: (data) => {
        this.task = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load task details.';
        this.loading = false;
      }
    });
  }

  onSubmit(): void {
    if (!this.task.title.trim()) {
      this.error = 'Title is required';
      return;
    }

    this.loading = true;
    this.error = '';

    if (this.isEditMode && this.taskId) {
      this.taskService.updateTask(this.taskId, this.task).subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: (err) => {
          this.error = 'Failed to update task.';
          this.loading = false;
        }
      });
    } else {
      this.taskService.createTask(this.task).subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: (err) => {
          this.error = 'Failed to create task.';
          this.loading = false;
        }
      });
    }
  }
}
