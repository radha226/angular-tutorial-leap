import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-component-template',
  templateUrl: './component-template.component.html',
  styleUrls: ['./component-template.component.scss']
})
export class ComponentTemplateComponent implements OnInit {

  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }
  templateSyntax(){
    console.log('tempalte click');
    this.router.navigate(['./template-syntax'],{relativeTo:this.activatedRoute});
  }
  userInput(){
    this.router.navigate(['./user-input'],{relativeTo:this.activatedRoute});
  }

}
