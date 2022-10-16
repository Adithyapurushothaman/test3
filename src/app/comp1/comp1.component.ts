import { Component, OnInit } from '@angular/core';
import { myserve } from '../service/info-service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="Gadgeon";
  clickme(){
   const ser = new myserve()
   ser.onclickbtn(this.title)
  }
}
