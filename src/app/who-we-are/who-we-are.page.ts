import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.page.html',
  styleUrls: ['./who-we-are.page.scss'],
})
export class WhoWeArePage implements OnInit {
  likes = 0;
  constructor() { }

  ngOnInit() {
  }

  clickLike(){
    this.likes++;
  }
}
