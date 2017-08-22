import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BookFiltersService } from "./books-filters.service";

@Component({
  selector: 'books-filters',
  templateUrl: './books-filters.component.html',
  styleUrls: ['./books-filters.component.scss'],
  providers: [BookFiltersService]
})
export class BooksFiltersComponent implements OnInit {
  bookFilters: MyApp.Models.IBookFilter = {
    sortOptions: []
  }
  filters: MyApp.Models.IBookFilterParam = {
    sortBy: "",
    searchText: "",
    pageNumber: undefined,
    pageSize: undefined
  }
  @Output() onUpdateFilters = new EventEmitter();

  constructor(private bookFilterService: BookFiltersService) { }

  ngOnInit() {
    this.bookFilterService.getSortOptions().subscribe((res) => {
      this.bookFilters.sortOptions = res;
    });
    this.onSelectSortBy("year_published");
  }
  onSelectSortBy(sortbyId: string = "year") {
    this.filters.sortBy = sortbyId;
    console.log(sortbyId);
    this.updateList();
  }

  updateList() {
    this.onUpdateFilters.emit(this.filters);
  }

}
