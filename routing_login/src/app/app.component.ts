import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'User Auth Demo';

  constructor(public userService: UserService, private router: Router) {}

  logout() {
    this.userService.logoutUser();
    this.router.navigate(['/login']);
  }

  buttonAction1() {
    this.performAction('Button 1 clicked!');
  }

  buttonAction2() {
    this.performAction('Button 2 clicked!');
  }

  buttonAction3() {
    this.performAction('Button 3 clicked!');
  }

  private performAction(message: string) {
    if (this.userService.isLoggedIn()) {
      alert(message);
    } else {
      this.router.navigate(['/login']); // Redirect to login if not logged in
    }
  }
}
