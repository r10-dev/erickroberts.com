import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/models/userlogin/user-login';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
 
})
export class UserLoginComponent implements OnInit {
  model = new UserLogin({
    username: '',
    password: '',
  });
  get diagnostic() { return JSON.stringify(this.model); }
  submitted = false;
  url = 'https://localhost:5001/api/userlogin/';

  onSubmit() {
    const formData: FormData = new FormData();
    this.submitted = true;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        })
    };
    let data = JSON.stringify(this.model);

    this.client.post(this.url, data, httpOptions)
    .subscribe(
      response => {
        this.model.password = '';
        this.model.username = '';

        alert('Your user request has been submitted. We will send you an email to confirm.');
       },
      err => console.log(err)
      );
  }
  constructor(private client: HttpClient) { }
  
  ngOnInit() {
  }

}
