import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-our-schedule',
  templateUrl: './our-schedule.page.html',
  styleUrls: ['./our-schedule.page.scss'],
})
export class OurSchedulePage implements OnInit {
  scheduleData: any[]=[];

  constructor(private games : GamesService, private router: Router, private animationCtrl : AnimationController) { }

  ngOnInit() {
    this.scheduleData = this.games.schedule;
  }

  ionViewDidEnter() {
    this.animateList()
  }

  animateList() {
    this.scheduleData.forEach((_, i) => {
      const item = document.querySelector(`#scheduleItem${i}`) as HTMLElement;

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
