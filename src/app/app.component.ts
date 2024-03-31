import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularDemo';
  displayValue : string = '';

  cogni : string = 'java fse';
  cogni1 : string = 'serviceNow';

  disable= false;

  count: number = 0;

  show = false;

  tog = true;

  randomData:number = 10;

  randomFun()
  {
    this.randomData = Math.floor(Math.random()*10);
  }

  //sending the data from parent to child


  //array
  student = ['shubam', 'anushka', 'sam', 'peter', 'abd', 'faf'];
  
  // Array of objects
  userDetails = [
    { name : 'anil', age :29, email : "anil@gmail.com", address :"patna" },
    { name : 'shubham', age :89, email : "skm@gmail.com", address :"patna" },
    { name : 'shivam', age :99, email : "painter@gmail.com", address :"patna" },
    { name : 'Rajesh kumar', age :99, email : "papa@gmail.com", address :"patna" }
];

  counterMethod(val : string)
  {
     val === "add" ? this.count++ : this.count--; 
  }
  getName(name : string)
  {
    alert("function called " + name);
  }

  counter(num : any)
  {
    num++;
    console.log(num);
  }

  getValue(name :string)
  {
    console.log(name);
  }

  getMouseOver()
  {
    console.log("cursor touching");
  }

  getMouseOver1()
  {
    console.log("cursor niche hai");
  }

  getValueName(name : string)
  {
    //console.log("hahhaha "+name);
    this.displayValue = name;
  }

  getFormData(data : NgForm)
  {
    console.log(data);
  }

  toggleFun()
  {
    if(this.tog)
    {
      console.log("hidden success");
      this.tog = false;
    }else{
      console.log("pallu utha re");
      this.tog = true;
      
    }
  }

  // Array of objects
  userItems = [
    { name : 'Virat', age :29, email : "anil@gmail.com", address :"patna" },
    { name : 'Dhoni', age :89, email : "skm@gmail.com", address :"patna" },
    { name : 'Sachin', age :99, email : "painter@gmail.com", address :"patna" },
    { name : 'Rohit', age :99, email : "papa@gmail.com", address :"patna" }
];
}
