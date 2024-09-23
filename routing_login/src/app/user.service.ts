import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: { email: string }[] = [{ email: 'test@example.com' }];
  private loggedInUser: string | null = null;

  checkUserExists(email: string): Observable<{ exists: boolean }> {
    const exists = this.users.some(user => user.email === email);
    return of({ exists });
  }

  registerUser(email: string): Observable<any> {
    if (!this.users.some(user => user.email === email)) {
      this.users.push({ email });
      return of({ email });
    } else {
      throw new Error('User already exists');
    }
  }

  loginUser(email: string): Observable<boolean> {
    if (this.users.some(user => user.email === email)) {
      this.loggedInUser = email;
      return of(true);
    }
    return of(false);
  }

  logoutUser(): void {
    this.loggedInUser = null;
  }

  isLoggedIn(): boolean {
    return this.loggedInUser !== null;
  }
}
