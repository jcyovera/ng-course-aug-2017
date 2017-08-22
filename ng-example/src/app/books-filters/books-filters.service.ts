import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import IOptionElement = MyApp.Models.IOptionElement;

@Injectable()
export class BookFiltersService {
    bookFilterObserver: Observable<IOptionElement[]>;
    baseUrl: string = 'http://localhost:3000';

    constructor(private http: Http) { }

    getSortOptions(): Observable<IOptionElement[]> {
        let requestUrl = `${this.baseUrl}/sortOptions/`;
        return this.bookFilterObserver = this.http.get(requestUrl).map(res => res.json() as IOptionElement[]);
    }

}