import { Component, OnInit, OnChanges } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../../../services/data/data.service';
import {AuthService} from '../../../services/auth/auth.service';
import {LoginComponent} from '../../management/login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService, LoginComponent]

})
export class NavbarComponent implements OnInit {

  renderLoginMenu: boolean;


  constructor(private router: Router, private dataService: AuthService) {
    this.dataService.loginActive.subscribe(active => this.renderLoginMenu = active);

  }

  ngOnInit() {
    this.dataService.loginActive.subscribe(res => {
      console.error('active from navbar? ', res);
    });
  }

  public checkToken() {
    //alert('Should render? ' + !!!localStorage.getItem('token'));
    //this.renderLoginMenu = !!!localStorage.getItem('token');
    //console.error('render ', this.renderLoginMenu);
  }


  logOut() {
    localStorage.removeItem('token');
    //this.renderLoginMenu = true;
    this.router.navigateByUrl('/api/home');
  }


  check() {
    //this.dataService.checkLogin();
    this.dataService.check();
  }
}
