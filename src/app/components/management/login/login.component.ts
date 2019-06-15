import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User} from '../../../models/user/user';
import {DataService} from '../../../services/data/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  state: any;
  finalState: any;

  loginForm: FormGroup;
  hideLoginMenuItem: boolean;


  renderLoginForm: boolean;

  validationMessages: any;

  constructor(
    private userService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private dataService: DataService
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
          this.hideLoginNavBarItem();
          this.router.navigateByUrl('/api/manager');
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


}
