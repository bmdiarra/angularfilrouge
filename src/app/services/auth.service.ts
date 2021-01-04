import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient ) { }

  // tslint:disable-next-line:typedef
  login( data: any ){
    return this.http.post(environment.url + 'login_check', data)
    .pipe(map(
      user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
      }
    )
    );
  }

  isLogin(): boolean {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }

  getAuthorizationToken(): string | null {
    const local = localStorage.getItem('currentUser');
    if (local){
      const currentUser = JSON.parse(local);

      return currentUser.token;

    }
    return null ;

  }
}
