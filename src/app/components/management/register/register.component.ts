import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../../../models/user/user';
import {passValidator} from './validator';
import {DataService} from '../../../services/data/data.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {

  state: any;
  finalState: any;

  registerForm: FormGroup;
  validationMessages: any;

  constructor(
    private userService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private dataService: DataService
    ) {

    this.registerForm = this.formBuilder.group({
        displayName: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern(/.{3,10}$/)])),


        email: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)])),

        password: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern(/^(?=.*\d).{4,8}$/)])),

        confirmPassword: ['', passValidator]
      }
    );
  }

  ngOnInit() {
    this.validationMessages = {
      displayName: [
        { type: 'required', message: 'Username is required.'},
        { type: 'pattern', message: 'Must be 3-10 characters long.'}
      ],
      email: [
        { type: 'required', message: 'Email is required.' },
        { type: 'unique', message: 'Email must be unique.'} ,
        { type: 'pattern', message: 'With domain 2-3 characters long.' }
      ],
      password: [
        { type: 'required', message: 'Password is required' },
        { type: 'pattern', message: 'At least one number and 4-8 characters long.' }
      ],
      confirmPassword: [
        { type: 'required', message: 'Password is required and both must match' },
        { type: 'pattern', message: 'It must be valid. Must contain at least one number and must be between 4 and 8 characters' }
      ]
    };
  }

  register() {
    console.log(this.registerForm.value);
    const user = new User('',
      this.registerForm.value.email,
      this.registerForm.value.displayName,
      '',
      this.registerForm.value.password
    );

    this.userService.signup(user)
      .subscribe(
        res => {
          console.log(res);
          const token = res['token'];
          localStorage.setItem('token', token);
          this.hideLoginNavBarItem();
          this.router.navigateByUrl('/api/home');
        },
        err => {
          this.registerForm.get('email').setErrors({unique: true});
          this.handleError(err);
        });
  }

  private handleError(err: HttpErrorResponse) {
    alert(err.error['message']);
  }

  hideLoginNavBarItem(): void {
    this.dataService.getState().subscribe( state => this.state = state);
    this.finalState = {...this.state, login: !!localStorage.getItem('token')};
    this.dataService.updateState(this.finalState);
  }
}
