import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User} from '../../../models/user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  validationMessages: any;

  constructor(private userService: AuthService, private router: Router, private formBuilder: FormBuilder) {

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
    this.validationMessages = {
      email: [
        { type: 'required',
          message: 'Email is required' },
        { type: 'pattern',
          message: 'Invalid email: It must contain a @ and a valid domain.' }
      ],
      password: [
        { type: 'required',
          message: 'Password is required' },
        { type: 'pattern',
          message: 'Invalid password: Must contain at least one number and must be between 4 and 8 characters' }
      ]
    };
  }

  login() {
    console.log(this.loginForm.value);
    const user = new User(this.loginForm.value.email, this.loginForm.value.password);
    this.userService.signin(user)
      .subscribe(
        res => {
          console.log(res);
          const token = res['token'];
          localStorage.setItem('token', token);
          this.router.navigateByUrl('/api/manager');
        },
        err => {
          console.log(err);
          this.handleError(err);
        });
  }

  private handleError(err: HttpErrorResponse) {
    if ( err.status === 500 ) {
      alert(err);
    } else if ( err.status === 404 ) {
      alert('The user does not exist');
    }
  }
}
