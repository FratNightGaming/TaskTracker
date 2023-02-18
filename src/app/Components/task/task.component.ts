import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() onDeleteTask:EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder:EventEmitter<Task> = new EventEmitter();

  xMark:IconDefinition = faTimes;

  constructor(){}
  
  ngOnInit(): void 
  {

  }



  DeleteTask(task:Task)
  {
    this.onDeleteTask.emit(task);
  }

  ToggleReminder()
  {
    this.onToggleReminder.emit();
  }
}
