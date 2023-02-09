import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UIService } from 'src/app/Services/ui.service';
import { Subscription } from 'rxjs';
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
  showAddTask: boolean = true;
  subscription: Subscription = new Subscription();

  @Output() OnAddTask:EventEmitter<Task> = new EventEmitter();

  constructor(private uiService: UIService)
  {
    this.subscription = this.uiService.onToggle().subscribe((result: boolean)=>
    {
      this.showAddTask = result;
    })
  }

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
