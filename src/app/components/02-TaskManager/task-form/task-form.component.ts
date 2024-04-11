import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { AuthService } from '../../../services/auth.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  taskTitle: string = '';
  taskDescription: string = '';

  constructor(
    private taskService: TaskService,
    private authService: AuthService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  addTask() {
    if (!this.taskTitle || !this.taskDescription) {
      console.log('Title and description cannot be empty');
      return; 
    }

    this.authService.getCurrentUserId().subscribe(userId => {
      console.log(userId);
      if (userId !== null) {
        this.taskService.addTask(userId, this.taskTitle, this.taskDescription).subscribe(() => {
          this.taskTitle = '';
          this.taskDescription = '';
          this.messageService.setMessage('TASK-CREADA');
        });
      } else {
        console.log('Usuario no autenticado');
      }
    });
  }
}
