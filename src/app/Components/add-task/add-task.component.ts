import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit
{
  text:string = "";
  day:string = "";
  reminder: boolean = false;

  @Output() OnAddTask:EventEmitter<Task> = new EventEmitter();

  constructor(){}

  ngOnInit(): void {
    
  }
 

  SubmitForm()
  {
    if (!this.text)
    {
      alert("Please add a task!");
      return;
    }

    //create new task; property values based on input fields
    let newTask:Task = {text: this.text, day:this.day, reminder: this.reminder};

    //trigger event OnAddTask
    this.OnAddTask.emit(newTask);

    //set input field values back to empty
    this.text = "";
    this.day = "";
    this.reminder = false;
  }



  Dookie(){
    alert("You dook");
  }

}
