import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  click_Twitter() {
    window.open('https://twitter.com/ErickLrob', '_blank');
  }
  click_Linkedin() {
    window.open('https://www.linkedin.com/in/erick-roberts-41023827', '_blank');
  }
  click_Email() {
    window.open('mailto:mail_updates@erickroberts.com');
  }
  click_Phone() {
    window.open('tel:1-479-353-4184');
  }

}
