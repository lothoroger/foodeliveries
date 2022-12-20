import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FoodAdmin';

  constructor(private activateRoute: ActivatedRoute, private authService: AuthService){}

  ngOnInit() {
    this.activateRoute.fragment.subscribe((value) => {
      console.log(value);
      this.jumpTo(value);
    });
  }


  jumpTo(section: string | null) {
    document.getElementById(section!)?.scrollIntoView({behavior: 'smooth'});
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }


}
