// src/app/register/register.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  email: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  handleRegister() {
    this.userService.checkUserExists(this.email).subscribe((response) => {
      if (response.exists) {
        this.router.navigate(['/login']); // Redirect to login page
      } else {
        this.userService.registerUser(this.email).subscribe(
          () => {
            this.router.navigate(['/login']); // Redirect to login after successful registration
          },
          (error) => {
            this.errorMessage = error.message;
          }
        );
      }
    });
  }
}
