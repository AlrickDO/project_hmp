import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.page.html',
  styleUrls: ['./who-we-are.page.scss'],
})
export class WhoWeArePage implements OnInit {
  likes = 0;
  isLiked = false;
  likeInt: number = 0;

  constructor(private animationCrtl: AnimationController, private gameservice: GamesService) { }

  ngOnInit() {
    this.gameservice.countLikes().subscribe(
      (data) => {
        this.likes = parseInt(data.toString());
      }
    );

    this.gameservice.likeStatus().subscribe(
      (data) => {
        this.likeInt = parseInt(data.toString());

        if (this.likeInt == 0) {
          this.isLiked = false
        }
        else {
          this.isLiked = true
        }

      }
    );
  }

  clickLike() {
    if (this.isLiked == false) {
      this.likeInt = 1

      this.gameservice.likeUpdate(this.likeInt).subscribe(
        (response: any) => {
          this.ngOnInit()
        });
    }
    else {
      this.likeInt = 0

      this.gameservice.likeUpdate(this.likeInt).subscribe(
        (response: any) => {
          this.ngOnInit()
        });
    }
  }

  ionViewDidEnter() {
    this.fadeInButton()
    this.fadeInImage()
    this.fadeInDesc()
    this.fadeInTitle()
  }

  fadeInImage() {
    const avatarElement = document.querySelector('#team-image') as HTMLElement;
    const animation = this.animationCrtl
      .create()
      .addElement(avatarElement)
      .duration(350)
      .iterations(1)
      .keyframes([
        { offset: 0, opacity: '0' },
        { offset: 0.4, opacity: '0.4' },
        { offset: 0.7, opacity: '0.7' },
        { offset: 1, opacity: '1' },
      ]);
    animation.play();
  }

  fadeInTitle() {
    const avatarElement = document.querySelector('#text-title') as HTMLElement;
    const animation = this.animationCrtl
      .create()
      .addElement(avatarElement)
      .duration(500)
      .iterations(1)
      .keyframes([
        { offset: 0, opacity: '0' },
        { offset: 0.4, opacity: '0.4' },
        { offset: 0.7, opacity: '0.7' },
        { offset: 1, opacity: '1' },
      ]);
    animation.play();
  }

  fadeInDesc() {
    const avatarElement = document.querySelector('#text-content') as HTMLElement;
    const animation = this.animationCrtl
      .create()
      .addElement(avatarElement)
      .duration(600)
      .iterations(1)
      .keyframes([
        { offset: 0, opacity: '0' },
        { offset: 0.4, opacity: '0.4' },
        { offset: 0.7, opacity: '0.7' },
        { offset: 1, opacity: '1' },
      ]);
    animation.play();
  }

  fadeInButton() {
    const avatarElement = document.querySelector('#like-container') as HTMLElement;
    const animation = this.animationCrtl
      .create()
      .addElement(avatarElement)
      .duration(800)
      .iterations(1)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'translateY(15px)' },
        { offset: 0.3, opacity: '0', transform: 'translateY(10px)' },
        { offset: 0.7, opacity: '0.7', transform: 'translateY(5px)' },
        { offset: 1, opacity: '1', transform: 'translateY(0px)' },
      ]);
    animation.play();
  }


}
