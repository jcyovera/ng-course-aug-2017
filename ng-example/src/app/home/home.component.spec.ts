import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { WeatherService } from "./home.service";
import { EllipsisPipe, MockEllipsisPipe } from "../_Pipes/ellipsis.pipe";
import { Observable } from "rxjs/Rx";

describe('Home', () => {
  let MockWeatherService={};
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [HomeComponent, MockEllipsisPipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: WeatherService, useValue: MockWeatherService }]
    });
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have an instance', () => {
    let model = {data:true};
    let service = TestBed.get(WeatherService);
    service.getWeather = () => {
        return Observable.of(model)
    }
    spyOn(service, "getWeather").and.returnValue(Observable.of(model));

    expect(component).toBeDefined();
    expect(service.getWeather).toHaveBeenCalled();
  });
  it('should be return a image url',()=>{
     let image="demo";
     component.getImageWeather(image);
     expect(component.getImageWeather).toHaveBeenCalled();
  });
});