import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainarea',
  templateUrl:'./mainarea.component.html',
  styleUrls: ['./mainarea.component.css']
})
export class MainareaComponent{

  firstname="praveen";
  t="my firstname";
  flag=true;
  tasks = []
  addTask(v){
    this.tasks.push({"task":v,"status":false});
  }
  deleteTask(index){
    this.tasks.splice(index,1);
  }
  strikeTask(index){
    this.tasks[index].status=true;
  }
}
