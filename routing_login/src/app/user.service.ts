// user.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private loggedIn = false;
  private registeredEmails: string[] = ['test@example.com', 'user@example.com'];

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  login(email: string): boolean {
    if (this.registeredEmails.includes(email)) {
      this.loggedIn = true;
      return true;
    }
    return false;
  }

  logout() {
    this.loggedIn = false;
  }

  register(email: string): boolean {
    if (!this.registeredEmails.includes(email)) {
      this.registeredEmails.push(email);
      return true;
    }
    return false;
  }
}
