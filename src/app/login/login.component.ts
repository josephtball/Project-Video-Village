import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor () {
    this.loginForm = this.createFormGroup();
  };

  createFormGroup() {
    return new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit() { };

}
