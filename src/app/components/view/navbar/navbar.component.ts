import { Component, OnInit, OnChanges } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../../../services/data/data.service';
import {AuthService} from '../../../services/auth/auth.service';
import {LoginComponent} from '../../management/login/login.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService, LoginComponent]

})
export class NavbarComponent implements OnInit {

  state: any;
  finalState: any;
  subscription: Subscription;

  hideLoginMenuItem: boolean;

  constructor(private router: Router, private dService: AuthService, private dataService: DataService) {
    this.subscription = this.dataService.getState().subscribe(state => {
      this.state = state;
      console.error('state ', this.state );
      this.hideLoginMenuItem = state['login'];
      console.error('navbar message', this.state);
    });

  }

  ngOnInit() {
    this.hideLoginMenuItem = !!localStorage.getItem('token');
  }

  logOut() {
    localStorage.removeItem('token');
    this.finalState = {...this.state, login: !!localStorage.getItem('token')};
    this.dataService.updateState(this.finalState);
    this.router.navigateByUrl('/api/home');
  }

}
