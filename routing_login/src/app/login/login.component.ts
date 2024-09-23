import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  handleLogin() {
    this.userService.loginUser(this.email).subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.router.navigate(['/']); // Redirect to the main page on successful login
      } else {
        this.errorMessage = 'Invalid credentials, please try again.';
      }
    });
  }
}
