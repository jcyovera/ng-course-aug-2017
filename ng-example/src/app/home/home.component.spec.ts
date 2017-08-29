import { TestBed, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from "./home.component";
import { WeatherService } from "./home.service";
import { EllipsisPipe } from "../_Pipes/ellipsis.pipe";

describe('Home Component', () => {
  let EmitterMock={};
  let WeatherServiceMock={};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [
        HomeComponent, EllipsisPipe
      ],
      providers:[
        { provide:WeatherService, useValue:WeatherServiceMock}
      ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the home', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const home = fixture.debugElement.componentInstance;
    expect(home).toBeTruthy();
  }));
});
