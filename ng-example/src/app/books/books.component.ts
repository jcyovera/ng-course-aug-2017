import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { BooksService } from "./books.service";
import { EmitterService } from "../shared/emitter.service";
import { EmmitterConstants } from "../shared/constants";

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  providers: [BooksService]
})
export class BooksComponent implements OnInit, OnChanges {
  books: MyApp.Models.IBooks[] = [];
  filters: MyApp.Models.IBookFilterParam = {
    sortBy: "",
    searchText: "",
    pageNumber: undefined,
    pageSize: undefined
  }
  searchObservable: any;
  @Input() set sortBy(value: string) {
    this.filters.sortBy = value;
  }

  constructor(private booksService: BooksService, private emitterService: EmitterService) { }

  ngOnInit() {
    this.UpdateList();
    this.searchObservable = this.emitterService.get(EmmitterConstants.SEARCHTEXT_CHANGE).subscribe(SearchText => {
      if (this.filters.searchText === SearchText) return false;
      this.filters.searchText = SearchText;
      this.UpdateList();
    });
  }
  ngOnChanges(): void {
    this.UpdateList();
    console.log("changing");
  }


  UpdateList() {
    this.booksService.getList(this.filters).subscribe((res) => {
      console.log("list")
      this.books = res;
    });
  }

}
