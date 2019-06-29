import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  public pageNumber = 2;
  toggle = false;

  togglePage() {
    if (this.toggle) {
      console.log(this.pageNumber);
      this.toggle= false;
      this.pageNumber = 2;
    } else {
      console.log(this.pageNumber);
      this.toggle = true;
      this.pageNumber = 1;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
