import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { OptInComponent } from '../opt-in/opt-in.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private dialog: MatDialog) { }



  ngOnInit() {
   
  }

}
