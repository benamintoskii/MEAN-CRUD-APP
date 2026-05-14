import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {
  task: Task | null = null;
  loading = true;
  error = '';

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchTask(id);
    } else {
      this.error = 'No task ID provided.';
      this.loading = false;
    }
  }

  fetchTask(id: string): void {
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
}
