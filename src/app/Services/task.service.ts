import { Injectable } from '@angular/core';
import { Task } from '../task';
import { Tasks } from '../Mock-Tasks';
import {Observable} from 'rxjs';
import {of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url:string = 'http://localhost:5000';

  constructor(private http:HttpClient) { }

  // GetTasks():Observable<Task[]>{
  //   return of(Tasks);
  // }

  GetTasks():Observable<Task[]>
  {
    return this.http.get<Task[]>(this.url+"/tasks");
  }

  DeleteTask(task:Task):Observable<Task>{
    return this.http.delete<Task>(`${this.url}/${task.id}`);
  }
}