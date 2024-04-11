import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: any;
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<boolean> {
    console.log(email, password);
    return this.http.get<any[]>('http://localhost:3000/users', { params: { email, password } }).pipe(
    map(users => {
        const loggedIn = users.length > 0;
        if (loggedIn) {
          this.currentUser = users[0]; 
        }
        return loggedIn;
      })
    );
  }

  getCurrentUserId(): Observable<number | null> {
    
    if (this.currentUser && this.currentUser.userId) {
      return of(this.currentUser.userId);
    } else {
      return of(null);
    }
  }


}
