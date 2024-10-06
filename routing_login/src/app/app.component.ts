// app.component.ts
import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Your App Title';

  // Change userService from private to public
  constructor(public userService: UserService) {}

  logout() {
    this.userService.logout();
  }

  buttonAction1() {
    // Action for Button 1
  }

  buttonAction2() {
    // Action for Button 2
  }

  buttonAction3() {
    // Action for Button 3
  }
}
