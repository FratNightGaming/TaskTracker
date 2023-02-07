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
      //leaving blank for now
      //may need to update task list to account for deleted task
      this.tasks = this.tasks.filter(t => t.id !== task.id)
      console.log(`Task Deleted: ${result}`);

    });
  }

  ToggleReminder(task: Task) 
  {
    task.reminder = !task.reminder;
    this.taskService.UpdateTaskReminder(task).subscribe((result:Task)=>
    {
      console.log(result.reminder);
    })
  }

  AddTask(task: Task):void{
    this.taskService.AddTask(task).subscribe((result:Task)=>
    {
      this.tasks.push(task);
      console.log(`Task Added: ${result}`);
    });
  }

}
