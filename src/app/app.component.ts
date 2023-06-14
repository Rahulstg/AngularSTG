import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularSTG_project';
  secondVariable='welcome to angular';
  getData(){
return this.secondVariable;
  }
  obj={
      name:'testnanmeobj',
      age:29
  }
  ay=['test1','test2','test3'];
  sys=window.location.host;
  
  }
 

