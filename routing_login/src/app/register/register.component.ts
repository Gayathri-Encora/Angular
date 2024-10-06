// registration.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './register.component.html',

})
export class RegisterComponent {
  email: string = '';
  message: string = '';

  constructor(private userService: UserService, private router: Router) {}

  register() {
    if (this.userService.register(this.email)) {
      this.router.navigate(['/login']);
    } else {
      this.message = 'Email already registered. Please log in.';
    }
  }
}
