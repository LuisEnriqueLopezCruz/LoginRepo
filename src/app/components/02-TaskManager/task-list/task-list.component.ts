import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { MessageService } from 'src/app/services/message.service';
import { Task } from 'src/models/task';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  query: string = '';
  mostrarTaskItems: boolean = true;
  userId: number | null = null;

  constructor(private taskService: TaskService,
    private messageService: MessageService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.getUserId();
    this.getTasksByUserId();
    this.messageService.getMessage().subscribe(() => {
      this.getTasksByUserId();
    });
  }
 
  getTasks(): void {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }
  getUserId(): void {
    this.authService.getCurrentUserId().subscribe(userId => {
      this.userId = userId;
    });
  }
  getTasksByUserId(): void {
    if (this.userId !== null) {
      this.taskService.getTasksByUserId(this.userId).subscribe(tasks => {
        this.tasks = tasks;
      });
    }
  }
  
  toggleTaskItems(): void {
    this.mostrarTaskItems = !this.mostrarTaskItems;
  }
}
