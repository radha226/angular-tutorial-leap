import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ComponentChildComponent } from './component-child/component-child.component';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.scss']
})
export class ComponentInteractionComponent implements OnInit {
  hero=HEROES;
  master='seniorMaster';
  //names=['raju','  ','Golu'];
  names = ['Dr IQ', '   ', '  Bombasto  '];
  voters:any[]=['voter1', 'voter2', 'voter3'];
  agree=0;
  disagree=0;
  // @ViewChild(ComponentChildComponent)
  constructor() { }

  ngOnInit() {
    console.log(typeof(this.names));
    // console.log('disagree value is '+this.disagree);
  }
  onVoted(agreed){
    console.log(agreed);
    agreed ? this.agree++: this.disagree++;
  }
  
  
}

export interface Hero {
  // title: string;
}
export const HEROES = [
  {name: 'Dr IQ'},
  {name: 'Magneta'},
  {name: 'Bombasto'},
  {name:'ronalodo'}
];

