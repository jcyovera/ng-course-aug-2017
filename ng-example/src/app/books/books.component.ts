import { Component, OnInit, Input, OnChanges  } from '@angular/core';
import { BooksService } from "./books.service";

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  providers:[BooksService]
})
export class BooksComponent implements OnInit, OnChanges {
  books: MyApp.Models.IBooks[] = [];
  filters: MyApp.Models.IBookFilterParam = {
    sortBy: "",
    searchText: "",
    pageNumber: undefined,
    pageSize: undefined
  }
  @Input() set sortBy(value:string){
    this.filters.sortBy=value;
  }

  constructor(private booksService:BooksService) { }

  ngOnInit() {
   this.UpdateList();
  }
  ngOnChanges(): void {
    this.UpdateList();
    console.log("changing");
  }


  UpdateList(){
    this.booksService.getList(this.filters).subscribe((res)=>{
      console.log("list")
      this.books=res;
    });
  }

}
