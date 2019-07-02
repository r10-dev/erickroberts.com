import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  burgerShow = false;
  burgerClick() {

    if (this.burgerShow) {
      this.burgerShow = false;
    } else {
      this.burgerShow = true;
    }
  }
  constructor() { }
  ngOnInit(): void {
  }



}
