import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent implements OnInit {
  clickMe1Title:string;
  clickMe2Title: string;
  heros:any=[];
  constructor() { }
  click=1;
  ngOnInit() {
  }
  clickMe1(){
    this.clickMe1Title='Hey I am Clicked'
  }
  clickMe2($event) {
    this.clickMe2Title=this.click++ +' event is clicked of ' + $event.target.tagName;
  }
  onkey1(event:any) {
    console.log(event.target.value);
    //console.log(event.target.value );
  }
  onkey2(value){
    console.log(value);
  }
  onkeyEnter1(event){
    console.log(event.target.value);
  }
  onkeyEnter2(value){
    console.log(value);
  }
  onkeyEnter4(event:string){
    console.log(event);
    this.heros.push(event);
    console.log(this.heros);
    
  }
  onkeyEnter3(event){
    console.log(event);
  }

}
