import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-angular-practice',
  templateUrl: './angular-practice.component.html',
  styleUrls: ['./angular-practice.component.scss']
})
export class AngularPracticeComponent implements OnInit {

  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }
  componentsTemplate(){
    this.router.navigate(['./component-template'],{relativeTo:this.activatedRoute});
  }
  componentsForm(){
    // this.router.navigate(['./form'],{relativeTo:this.activatedRoute});
    this.router.navigate(['./forms'],{relativeTo:this.activatedRoute});
  }
  componentAnimation(){
    this.router.navigate(['./animation'], {relativeTo:this.activatedRoute});
  }
  javascriptLogic(){
    this.router.navigate(['./javascript-logic'], {relativeTo:this.activatedRoute});
  }

}
