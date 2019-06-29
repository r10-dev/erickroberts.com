import { Component, OnInit, NgModule } from '@angular/core';
import { UserViewModel } from 'src/app/models/user-view-model/user-view-model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
})

export class UserFormComponent implements OnInit {

  model = new UserViewModel({
    username: '',
    roleselected: 'Reader',
    isauthor: false,
    password: '',
    email: '',
  });
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  submitted = false;
  url = 'https://localhost:5001/api/user/';

  onSubmit() {
    const formData: FormData = new FormData();
    this.submitted = true;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        })
    };
    let data = JSON.stringify(this.model);
    if (this.model.isauthor) {
      this.model.roleselected = 'author';
    }
    this.client.post(this.url, data, httpOptions)
    .subscribe(
      response => {
        this.model.isauthor = false;
        this.model.password = '';
        this.model.username = '';
        this.model.roleselected = 'Reader';
        this.model.email = '';
        alert('Your user request has been submitted. We will send you an email to confirm.');
       },
      err => console.log(err)
      );
  }
  constructor(private client: HttpClient) { }

  ngOnInit() {
    console.log('init');
  }

}
