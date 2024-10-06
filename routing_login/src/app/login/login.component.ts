// login.component.ts
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
    if (this.userService.login(this.email)) {
      this.router.navigate(['/home']); // Change to your home/dashboard route
    } else {
      this.errorMessage = 'Email not registered. Please register first.';
    }
  }
}
