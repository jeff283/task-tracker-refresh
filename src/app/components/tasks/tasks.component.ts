import { Component } from '@angular/core';
// import { TASKS } from '../../mock-task';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private taskService:TaskService) {}

  ngOnInit(): void {
    // this.tasks = this.taskService.getTask();
    this.taskService.getTask().subscribe((tasks:Task[])=> this.tasks = tasks);
  }

}
