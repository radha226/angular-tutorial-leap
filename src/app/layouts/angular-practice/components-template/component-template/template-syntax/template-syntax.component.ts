import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.scss']
})
export class TemplateSyntaxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('template synatic');
  }

}
