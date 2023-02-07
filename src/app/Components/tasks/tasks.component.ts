import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/task';
import { Tasks } from 'src/app/Mock-Tasks';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit 
{
  //line below: Tasks is a public array in Mock-Tasks.ts; 
  //no longer needed when retrieving data from json server
  // tasks:Task[] = Tasks;
  tasks:Task[] = [];

  
  constructor(private taskService:TaskService){}
  
  ngOnInit(): void 
  {
    this.taskService.GetTasks().subscribe((results:Task[])=>
    {
      this.tasks = results;
      console.log(`Tasks array: ${results}`);
    });
  }

  DeleteTask(task: Task):void{
    this.taskService.DeleteTask(task).subscribe((result:Task)=>
    {
      // this.tasks = result;
      console.log(`Tasks array: ${result}`);
    });
  }
  
}
