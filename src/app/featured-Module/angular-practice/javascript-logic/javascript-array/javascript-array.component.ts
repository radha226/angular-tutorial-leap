import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript-array',
  templateUrl: './javascript-array.component.html',
  styleUrls: ['./javascript-array.component.scss']
})
export class JavascriptArrayComponent implements OnInit {
  upperCase:any[]=["aa","bb"];
  upperCaseNew:any[]=[];
  everyFunctionResult:boolean;
  indexOfResult;
  checkItIsArrayResult;
  constructor() { }
  
  ngOnInit() {
    let i;
    for(i=0; i < this.upperCase.length; i++){
      this.upperCaseNew.push(this.upperCase[i].toUpperCase());
    }
    console.log(this.upperCaseNew);
  }
  everyFunction(){
    let age=["11","33","90"];
    this.everyFunctionResult=age.every(this.checkAdult);
    console.log(this.everyFunctionResult);
  
  }
  checkAdult(age,index) {
    console.log(index);
    console.log(age[index]);
    return age < 100;
  }
  
  filterFunction(){
    let age=["11","33","90","120"];
    let filterResult=age.filter(this.checkfilter);
    console.log(filterResult);
  }
  checkfilter(age){
    return age > 50;
  }
  sumOfAllTheArrays(){
    let number=[10,17,50];
    let sum:any=0;
    number.forEach((value:any,index)=>{
      sum += value*10;
    })
    console.log(sum);
  }
  indexofFunction(){
    let data="'Banana','Orange','Apple','Mango'";
    this.indexOfResult=data.indexOf("Apple");
    console.log(this.indexOfResult);
    //output is 19
  }
  checkItIsArray(){
    let data="radmdkjfdkfjdf";
    this.checkItIsArrayResult=Array.isArray(data);
    console.log(this.checkItIsArrayResult);
    //output is false
  }
  joinFunction(){
    let data=["bb","dd","yyy","movie"];
    console.log(data.join("&"));
    // output "bb","dd","yyy","movie"
  }
  popFunction(){
    let data=["bb","dd","yyy","movie"];
    console.log(data.pop());
    // outpur is movie
  }
  pushFunction(){
    let data=["bb","dd","yyy","movie"];
    data.unshift("angular tutorial",);
    console.log(data);
    //output ["bb", "dd", "yyy", "movie", "angular tutorial"]
  }
  concatFunction(){
    let data=["bb","dd","yyy","movie"];
    data.splice(2,1,"rama","sham");
    console.log(data);
    //output is ["bb", "dd", "rama", "sham", "movie"]
  }
}