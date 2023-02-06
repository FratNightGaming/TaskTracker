import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/task';
import { faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit
{
  @Input() task:Task = {} as Task;
  xMark:IconDefinition = faTimes;

  constructor(){}
  
  ngOnInit(): void 
  {

  }

}
