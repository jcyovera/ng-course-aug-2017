import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { UserProfileService } from '../shared/user-profile.service';

@Injectable()
export class LoginService {
    loginObserver: Observable<any>;
    baseUrl: string = 'http://localhost:3000/users';

    constructor(private http: Http, private userProfileService:UserProfileService) { }

    getUser(username: string, password: string): Observable<any> {
        let requestUrl = `${this.baseUrl}`;
        this.loginObserver = this.http.get(requestUrl).map((res:Response) => res.json());
        //TODO: For class example
        return this.loginObserver.map((users)=>{
            var foundUser = users.find(user => user.username === username && user.password === password);
            if (foundUser) {
              this.changeLoginState(true);
            }
        });
    }
    login(username: string, password: string) {
        return this.getUser(username, password);
    }
    logout() {
        this.changeLoginState(false);
    }
    private changeLoginState(val: boolean) {
        console.log(val);
        this.userProfileService.isLoggedIn = val;
    }
}