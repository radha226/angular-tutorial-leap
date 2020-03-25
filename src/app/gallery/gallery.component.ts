import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{ galleryItems } from './gallery';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  //galleryItems:any[];
  firstnameValue:any='';
  galleryItems:galleryItems[];
  htmlStr: string = '<strong>The Tortoise</strong> &amp; the Hare';
  colNumber:number=2;
  data:boolean=true;
  data2:boolean=false;
  message:any;
  constructor(private http: HttpClient) { 
    this.galleryItems=[
      {id:1,title:'this is first item', desc:'Lorem Ipsum has been the industry standard dummy text ever'},
      {id:2,title:'this is second item', desc:'Lorem Ipsum has been the industry standard dummy text ever'},
      {id:3,title:'this is third item', desc:'Lorem Ipsum has been the industry standard dummy text ever'},
      {id:4,title:'this is fourth item', desc:'Lorem Ipsum has been the industry standard dummy text ever'}
    ]
    this.getTotalGallery();
    this.getgalleryItem();
    // this.message=
  }
  getgalleryItem(){
    let ll= this.galleryItems.filter(e=>e.id===3);
    console.log(ll);
    console.log(ll[0].title);
  }
  getTotalGallery(){
    length= this.galleryItems.length;
    console.log(length);
  }
  save(){
    console.log('save is clicked');
    this.firstnameValue="your first name is tester";
  }
  
  ngOnInit() {
    // this.http.get('https://jsonplaceholder.typicode.com/posts')
    // .subscribe(response => {
    //   console.log(response);
    //   console.log(response[0].title);
    // });
    let headers= {
      "Content-type": "application/json; charset=UTF-8"
    }
    let data = {
      'title': 'foo',
      'body': 'bar',
      'userId': '1'
    }
    this.http.post('https://jsonplaceholder.typicode.com/posts',data, {headers} ).subscribe(resutl=>{
      //console.log(resutl);
    })
  
  }

}
