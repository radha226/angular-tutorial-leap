import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-child',
  templateUrl: './component-child.component.html',
  styleUrls: ['./component-child.component.scss']
})
export class ComponentChildComponent implements OnInit {
  // @Input() heroChild:hero;
  @Input() voterChild:[];
  @Output() voted = new EventEmitter();
  @Input() masterChild: string;
  @Input() heroChild:[];
  //didvote=false;
   //@Input() nameChild:any;
  private _name:any=[];
  @Input()
  set nameChild(name:any) {
    name.forEach(day => {
      let val =(day && day.trim()) || '<not set>';
      this._name.push(val);
    })
  }
  get nameChild(): any { return this._name; }
  constructor() { }
  vote(agreed:boolean){
    // this.didvote=true;
   this.voted.emit(agreed);
  }

  ngOnInit() {
    console.log(this.voterChild);
  }

}
