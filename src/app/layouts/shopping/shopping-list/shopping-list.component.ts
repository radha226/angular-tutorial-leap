import { Component, OnInit ,OnDestroy, ViewChild, ChangeDetectorRef} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatTableDataSource,MatPaginator } from '@angular/material';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private http:HttpClient) { }
  products:Array<any>=[];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource();
  ngOnInit() {
    this.spinner.show();
    this.getProducts().then((result:any)=>{
      this.products=result;
      this.dataSource = new MatTableDataSource(this.products);
      console.log(this.products);
      this.spinner.hide();
      console.log(this.dataSource);
      console.log( this.dataSource.filteredData);
    })
  }
  applyFilter(event: Event) {
    console.log(event);
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getProducts(){
    return new Promise((resolve, reject) => {
      this.http.get('https://radha226.github.io/api-link/').subscribe((result)=>{
        resolve(result)
      },error=>{
        reject(error);
      })
    })
  }

}
