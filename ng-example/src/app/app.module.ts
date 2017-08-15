import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

/* Components */
import { BooksComponent } from './books/books.component';
/*Services*/
import { WeatherService } from './home/home.service';
/* directives */
import { HighlightDirective } from './_Directives/highlight.directive';
/* Pipes */
import { EllipsisPipe } from './_Pipes/ellipsis.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    HighlightDirective,
    EllipsisPipe
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
