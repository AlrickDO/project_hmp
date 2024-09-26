import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.page.html',
  styleUrls: ['./who-we-are.page.scss'],
})
export class WhoWeArePage implements OnInit {
  likes = 0;
  isLiked = false;
  constructor() { }

  ngOnInit() {
  }

  clickLike(){
    if(this.isLiked == false){
      this.likes++;
      this.isLiked = true;
    }
    else{
      this.isLiked = false;
      this.likes--;
    }
  }
}
