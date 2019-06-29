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

  openDialog(): void {
    const dialogRef = this.dialog
      .open(OptInComponent, {
        width: '65%',
        height: '75%'
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }



  ngOnInit() {
     // this.openDialog();
  }

}
