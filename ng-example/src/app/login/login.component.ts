import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

import { LoginService } from './login.service';
import { UserProfileService } from '../shared/user-profile.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  private loginSub: Subscription;
  username: string;
  password: string;
  errorMessage: string;

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router,
    private userProfileService: UserProfileService) {
  }

  public get isLoggedIn(): boolean {
    return this.userProfileService.isLoggedIn;
  }

  login() {
    this.loginSub = this.loginService
      .login(this.username, this.password)
      .mergeMap(loginResult => {
        return this.route.queryParams;
      })
      .map(qp => qp['redirectTo'])
      .subscribe(redirectTo => {
        if (this.userProfileService.isLoggedIn) {
          this.errorMessage = undefined;
          console.log(`Successfully logged in`);
          let url = redirectTo ? [redirectTo] : ['/'];
          this.router.navigate(url);
        } else {
          this.errorMessage = "Sus credenciales no son correctas";
        }
      });
  }

  logout() {
    this.loginService.logout();
    console.log(`Successfully logged out`);
  }

  ngOnDestroy() {
    if (this.loginSub) {
      this.loginSub.unsubscribe();
    }
  }

}
