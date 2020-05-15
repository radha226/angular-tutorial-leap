import { Component, OnInit } from '@angular/core';
import {Routes, RouterModule, ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-javascript-logic',
  templateUrl: './javascript-logic.component.html',
  styleUrls: ['./javascript-logic.component.scss']
})
export class JavascriptLogicComponent implements OnInit {

  constructor(private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  array(){
    this.router.navigate(['./array'], {relativeTo:this.activatedRoute});
  }

}
