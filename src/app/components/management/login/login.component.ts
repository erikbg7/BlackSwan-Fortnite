import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BSAuthService } from '../../../services/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User} from '../../../models/user/user';
import {DataService} from '../../../services/data/data.service';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular-6-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [BSAuthService]
})
export class LoginComponent implements OnInit {

  state: any;
  finalState: any;

  loginForm: FormGroup;
  hideLoginMenuItem: boolean;


  renderLoginForm: boolean;

  validationMessages: any;

  constructor(
    private userService: BSAuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private socialAuthService: AuthService
    ) {

    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)])),

      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^(?=.*\d).{4,8}$/)]))
    });

  }

  ngOnInit() {

    this.hideLoginMenuItem = false;
    this.renderLoginForm = false;
    this.validationMessages = {
      email: [
        {
          type: 'required',
          message: 'Email is required'
        },
        {
          type: 'pattern',
          message: ' It must contain a @ and a valid domain.'
        }
      ],
      password: [
        {
          type: 'required',
          message: 'Password is required'
        },
        {
          type: 'pattern',
          message: 'At least one number and be between 4-8 characters.'
        }
      ]
    };
  }

  login() {
    console.log(this.loginForm.value);
    const user = new User('', this.loginForm.value.email,  '', '', this.loginForm.value.password);
    this.userService.signin(user)
      .subscribe(
        res => {
          console.log(res);
          const token = res['token'];
          localStorage.setItem('token', token);
          localStorage.setItem('account', this.loginForm.value.email);
          this.hideLoginNavBarItem();
          this.router.navigateByUrl('/api/home');
        },
        err => {
          console.log(err);
          this.handleError(err);
        });
  }

  private handleError(err: HttpErrorResponse) {
    alert(err.error['message']);
  }

  toggleLoginForm() {
    this.renderLoginForm = true;
  }

  hideLoginNavBarItem(): void {
    this.dataService.getState().subscribe( state => this.state = state);
    this.finalState = {...this.state, login: !!localStorage.getItem('token')};
    this.dataService.updateState(this.finalState);
  }

  socialSignIn(socialPlatform: string) {
    console.error('Social LOGIN');
    let socialPlatformProvider;
    if (socialPlatform === 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + ' sign in data : ' , userData);
        const token = userData['token'];
        console.error('token', token);
        if (!!token) {
          localStorage.setItem('token', token);
          this.hideLoginNavBarItem();
          localStorage.setItem('account', userData['email']);
          this.router.navigateByUrl('/api/home');
        }
      }
    ).catch(err => {
      this.handleError(err);
    });
  }

}
