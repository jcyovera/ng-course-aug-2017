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
import { CanActivateAuthGuard } from "./shared/can-activate.service";
import { UserProfileService } from "./shared/user-profile.service";
/* directives */
import { HighlightDirective } from './_Directives/highlight.directive';
/* Pipes */
import { EllipsisPipe } from './_Pipes/ellipsis.pipe';
import { LoginComponent } from './login/login.component';
import { RouteComponent } from "./shared/route.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    HighlightDirective,
    EllipsisPipe,
    LoginComponent,
    RouteComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [WeatherService,CanActivateAuthGuard,UserProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
