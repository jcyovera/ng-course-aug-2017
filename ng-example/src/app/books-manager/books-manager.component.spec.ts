/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA, EventEmitter } from '@angular/core';

import { BooksManagerComponent } from './books-manager.component';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BooksComponent } from "../books/books.component";
import { BooksFiltersComponent } from "../books-filters/books-filters.component";
import { EmmitterConstants } from "../shared/constants";
import { EmitterService, EmitterServiceMock } from "../shared/emitter.service";

describe('BooksManagerComponent', () => {
  let component: BooksManagerComponent;
  let fixture: ComponentFixture<BooksManagerComponent>;
  let EmitterMock = new EmitterServiceMock();

  beforeEach(async(() => {
    spyOn(EmitterMock, "get").and.returnValue(new EventEmitter<any>());
    
    TestBed.configureTestingModule({
      declarations: [BooksManagerComponent,BooksComponent, BooksFiltersComponent],
      imports:[FormsModule,HttpModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers:[
        EmmitterConstants,
        { provide: EmitterService, useValue: EmitterMock },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
