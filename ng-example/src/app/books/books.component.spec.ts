/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA, EventEmitter } from '@angular/core';

import { BooksComponent } from './books.component';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { EmmitterConstants } from "../shared/constants";
import { EmitterService,EmitterServiceMock } from "../shared/emitter.service";
import { BooksService } from "./books.service";

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;
  let EmitterMock = new EmitterServiceMock();
  let MockBooksService = {};

  beforeEach(async(() => {
    spyOn(EmitterMock, "get").and.returnValue(new EventEmitter<any>());

    TestBed.configureTestingModule({
      declarations: [BooksComponent],
      imports: [HttpModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        EmmitterConstants,
        { provide: EmitterService, useValue: EmitterMock },
        { provide: BooksService, useClass: MockBooksService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
