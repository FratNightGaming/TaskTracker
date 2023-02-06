import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/task';
import { Tasks } from 'src/app/Mock-Tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  
  tasks:Task[] = Tasks;
  
  constructor(){}
  
  ngOnInit(): void 
  {

  }


  
}
