import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'books-manager',
  templateUrl: './books-manager.component.html',
  styleUrls: ['./books-manager.component.scss']
})
export class BooksManagerComponent implements OnInit {
  filters:any;
  
  constructor() { }

  ngOnInit() {
  }

}
