import { AuthService } from './services/auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inventory-manager';
  isCollapsed = false;

  isLoggedIn = false;

  constructor(
    private authService: AuthService
  ) {
    this.isLoggedIn = this.authService.loggedIn;
  }
}
