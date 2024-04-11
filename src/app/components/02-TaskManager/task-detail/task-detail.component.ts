import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/models/task';
@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  task: Task | null = null;

  constructor(private route: ActivatedRoute, private taskService: TaskService) { }

  ngOnInit(): void {
    this.getSingleTask();
  }

  getSingleTask(){
    this.route.params.subscribe((data)=>{
      this.taskService.getSingleTask(data.id).subscribe((task) => {
        this.task=task;
        console.log(this.task);
    })
    })
  }

}
