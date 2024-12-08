import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-what-we-play',
  templateUrl: './what-we-play.page.html',
  styleUrls: ['./what-we-play.page.scss'],
})
export class WhatWePlayPage implements OnInit {
  constructor(private games: GamesService, private animationCtrl:AnimationController) { }
  game_list: any[] = []

  ngOnInit() {
    this.games.getGameList().subscribe(
      (data)=> {
          this.game_list = data;
        }
     );
  }

  ionViewDidEnter(){
    this.animateCards()
  }

  animateCards() {
    this.game_list.forEach((_, i) => {
      const item = document.querySelector(`#gameCard${i}`) as HTMLElement;

      setTimeout(() => {
        const animation = this.animationCtrl
          .create()
          .addElement(item)
          .duration(700) 
          .iterations(1)
          .keyframes([
            { offset: 0, opacity: '0', transform: 'translateY(20px)' }, 
            { offset: 0.5, opacity: '0.5', transform: 'translateY(10px)' },
            { offset: 1, opacity: '1', transform: 'translateY(0px)' }
          ]);
        animation.play();
      }, i * 300); 
    });
  }

  
}
