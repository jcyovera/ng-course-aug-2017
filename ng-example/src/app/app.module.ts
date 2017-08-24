import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { LoginService } from "./login/login.service";
import { BooksManagerComponent } from './books-manager/books-manager.component';
import { BooksFiltersComponent } from './books-filters/books-filters.component';
import { EmitterService } from "./shared/emitter.service";
import { RegisterUserComponent } from './register-user/register-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    HighlightDirective,
    EllipsisPipe,
    LoginComponent,
    RouteComponent,
    BooksManagerComponent,
    BooksFiltersComponent,
    RegisterUserComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [WeatherService,CanActivateAuthGuard,UserProfileService, LoginService, EmitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
