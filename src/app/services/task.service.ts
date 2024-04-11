import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Task} from 'src/models/task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  apiUrl='http://localhost:3000/tasks'
  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }
  updateTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task);
  }
  addTask(userId: number, title: string, description: string): Observable<Task> {
    const taskObj = {
      userId,
      title,
      description,
      completed: false,
      date: new Date()
    };
    return this.http.post<Task>(this.apiUrl, taskObj);
  }
  getTaskId(task: Task): number {
    return task.id;
  }
  getTasksByUserId(userId: number): Observable<Task[]> {
    const url = `${this.apiUrl}?userId=${userId}`;
    return this.http.get<Task[]>(url);
  }
  getSingleTask(id: number) : Observable <Task> {
    return this. http.get <Task> (this.apiUrl + '/' + id);
  }

  deleteTask(id:number): Observable<any>{
   return this.http.delete<Task>(this.apiUrl + '/' +id);
  }


}
