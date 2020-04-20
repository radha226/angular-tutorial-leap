import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { fadeInLeft, slidingEffect, jackInTheBox, changeDivSize, ballonSizeChange, slideLeft  } from 'src/app/shared/animate';

@Component({
  selector: 'app-component-animations',
  templateUrl: './component-animations.component.html',
  styleUrls: ['./component-animations.component.scss'],
  animations: [
    jackInTheBox,
    fadeInLeft,
    slidingEffect,
    changeDivSize,
    ballonSizeChange,
    slideLeft
]
})
export class ComponentAnimationsComponent implements OnInit {
  todoList:any=['Richa Chadda','Surinder Singh','Alowea plants', 'Animals'];
  isOpen = true;
  currentState='initial';
  ballonBefore='before';
  slideLeftState
  constructor() { }
  
  slideleft(){
    this.slideLeftState='slideLeftAfter';
    console.log(this.slideLeftState);
  }
  changeBallonSize(){
    this.ballonBefore=this.ballonBefore=='before'?'after':'before';
  }
  changeState(){
    console.log(this.currentState);
    this.currentState=this.currentState=='initial'?'final':'initial';
  }
  ngOnInit() {
  }
  addList(event){
    console.log(event);
    this.todoList.push(event);
  }
  deleteTodo(i){
    console.log(i);
    this.todoList.splice(i, 1);
    console.log(this.todoList);
    // this.todoList.removeAt(i);
    //this.todoList.splice
  }

}
