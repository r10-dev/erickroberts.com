import { Component, OnInit, Inject } from '@angular/core';
import { MailchimpResponse } from '../../interfaces/mailchimp-response';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-opt-in',
  templateUrl: './opt-in.component.html',
  styleUrls: ['./opt-in.component.scss'],
 })
export class OptInComponent implements OnInit {
  error = '';
  submitted = false;
  mailChimpEndpoint = 'https://shelfsquirrel.us7.list-manage.com/subscribe/post-json?u=34d4610eb82d0527700c77b6c&amp;id=7eb69635ec&';
  showForm = true;
  constructor(private client: HttpClient, public dialogRef: MatDialogRef<OptInComponent>) { }

  // start of reactive formcontrol instances
  emailControl = new FormControl('',
    [
      Validators.required,
      Validators.email,

    ]);

  nameControl = new FormControl('', [
    Validators.required
  ]);


  submit() {
    this.error = '';

    if (this.emailControl.status === 'VALID' && this.nameControl.status === 'VALID') {
      const params = new HttpParams()
        .set('NAME', this.nameControl.value)
        .set('EMAIL', this.emailControl.value)
        .set('b_34d4610eb82d0527700c77b6c_7eb69635ec', '');

      const mailChimpUrl = this.mailChimpEndpoint + params.toString();

      this.client.jsonp<MailchimpResponse>(mailChimpUrl, 'c').subscribe(response => {
        if (response.result && response.result !== 'error') {
          this.submitted = true;
        } else {
          this.error = response.msg;
        }
      }, error => {
        console.error(error);
        this.error = 'Sorry, an error occurred.';
      });
    }

    if (this.submitted) {
      this.emailControl.reset();
      this.nameControl.reset();
      this.showForm = false;

    }
  }

  ngOnInit() {
  }

}
