import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { OptInComponent } from '../opt-in/opt-in.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  whatsHappeningMessage: string;
  whatsHappening: string;
  whatsHappeningPicture: string;

  someNoneImportantTitle: string;
  someNoneImportantPicture: string;
  someNoneImportantMessage: string;


  constructor() { }



  ngOnInit() {
    this.whatsHappeningPicture = 'burningman';
    this.whatsHappening = 'Drastic times call for drastic measures.......';

    this.whatsHappeningMessage = 'I have, in the last month, started freelancing full-time. ' +
      'I was highly frustrated looking for a job. It seemed like everyone was looking for this person that was part ' +
      '98% unicorn and 2% software developer. I was disappointing really. After 12 years of developing software in multiple industries I felt ' +
      'like I was taking a test in college in every interview. ' +
      'I was so tired of trying to prove myself to people - "Could you please write a script to reverse a binary tree on the whiteboard?"' +
      ', ah no actually I can\'t and dont think I ever would even want to. ' +
      'So, I decided to take matters into my own hands. <strong>I kind of just threw a match ' +
      'and walked away.</strong><br> <br>' ;

    this.someNoneImportantTitle = 'What does all this mean? R10 Development is in full effect, BABY!.';
    this.someNoneImportantPicture = 'r10-logo-small-br';
    this.someNoneImportantMessage = 'I am available to start talking about projects now. I would love to hear about ' +
      'a project you are working on or something you would like to get started. If you know of someone that needs any help with anything related to IT or software please send them ' +
      'my way so I can see if I can help in any way. If you would like to connect give me a shout on' +
      '<a class="text-blue-300" href="https://www.linkedin.com/in/erick-roberts-41023827/"> LinkedIn </a> ' +
      'or you can schedule a call with me in the HireMe! link in the header section.';
  }

}
