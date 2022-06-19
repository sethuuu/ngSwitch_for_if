import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  
    users=[
      {name:"dinesh",age:12,gender:'m'},
      {name:"sethu",age:86,gender:'m'},
      {name:'gomathi',age:16,gender:'f'},
      {name:'gokul',age:45,gender:'m'},
      {name:'kamala',age:22,gender:'f'},

    
    ]
}
