import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  
  @Input() buttonText:string = "";
  @Input() buttonColor: string = "";
  @Output() buttonClick: EventEmitter<any> = new EventEmitter;

  constructor() {}
  
  ngOnInit(): void {
    
  }
  
  OnClick() {
    this.buttonClick.emit();
    }
}
