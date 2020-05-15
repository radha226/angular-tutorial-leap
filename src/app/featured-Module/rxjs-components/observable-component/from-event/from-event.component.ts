import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit  {
  @ViewChild('add', { static: false }) add:ElementRef;
  listBulk:Array<any>=[];
  constructor() { }
  
  ngOnInit() {
  }
  ngAfterViewInit() {
    let count=0;
    fromEvent(this.add.nativeElement,'click').subscribe((observer:any)=>{
      this.listBulk.push(`list number is  `+count++);
    })
  }

}
