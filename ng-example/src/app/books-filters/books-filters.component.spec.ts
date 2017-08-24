/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BooksFiltersComponent } from './books-filters.component';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

describe('BooksFiltersComponent', () => {
  let component: BooksFiltersComponent;
  let fixture: ComponentFixture<BooksFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksFiltersComponent ],
      imports:[FormsModule, HttpModule],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
