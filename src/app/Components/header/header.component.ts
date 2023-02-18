import { Component, OnInit } from '@angular/core';
import { UIService } from 'src/app/Services/ui.service';
import { Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  title:string = "Task Tracker";

  showAddTask: boolean = true;
  subscription:Subscription = new Subscription();

  constructor(private uiService:UIService, private router:Router) 
  {
    this.subscription = this.uiService.onToggle().subscribe((result: boolean)=>
    {
      this.showAddTask = result;
    })
  }
  
  ngOnInit(): void {
    
  }
  
  ToggleAddTask() 
  {
    this.uiService.ToggleAddTask();
  }

  hasRoute(route:string) : boolean
  {
    return this.router.url === route;
  }
}
