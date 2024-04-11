import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/models/task';
import { TaskService } from 'src/app/services/task.service';
import { MessageService } from 'src/app/services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() taskItem: Task | undefined;
  
  taskItem2:Task | undefined
  isEditingTitle: boolean | undefined;
  updatedTitle: string=''
  isEditingDescription: any;
  updatedDescription:string =''
  constructor(private taskService : TaskService,
    private messageService : MessageService,
    private router: Router) { }

  ngOnInit() {

  }

  deleteTask(){
    this.taskService.deleteTask(this.taskItem!.id).subscribe(()=>{
    this.messageService.setMessage('TASK-DELETED');
    });
  }
  toggleEdit(field: string): void {
    if (field === 'title') {
      this.isEditingTitle = !this.isEditingTitle;
      if (!this.isEditingTitle) {
        this.updatedTitle = this.taskItem!.title;
      }
    } else if (field === 'description') {
      this.isEditingDescription = !this.isEditingDescription;
      if (!this.isEditingDescription) {
        this.updatedDescription = this.taskItem!.description;
      }
    } else if (field === 'all') {
      this.isEditingTitle = true;
      this.isEditingDescription = true;
      this.updatedTitle = this.taskItem!.title;
      this.updatedDescription = this.taskItem!.description;
    }
  }
  updateTask(): void {
    this.taskItem!.description = this.updatedDescription
    this.taskItem!.title = this.updatedTitle
    this.taskService.updateTask(this.taskItem!).subscribe(updatedTask => {
      console.log('Tarea actualizada:', updatedTask);
      this.router.navigate(['/tasks']);
    });
  }
}