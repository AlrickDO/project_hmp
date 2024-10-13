import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/games.service';
import { ActivatedRoute } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.page.html',
  styleUrls: ['./schedule-details.page.scss'],
})
export class ScheduleDetailsPage implements OnInit {
  index = 0;
  selectedSchedule: any;

  constructor(private route: ActivatedRoute, private games: GamesService, private animationCtrl: AnimationController) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.index = params['index']
      }
    )
    this.selectedSchedule = this.games.schedule[this.index];
  }

  ionViewDidEnter() {
    this.fadeInCard()
  }

  fadeInCard() {
    const avatarElement = document.querySelector('#card-group') as HTMLElement;
    const animation = this.animationCtrl
      .create()
      .addElement(avatarElement)
      .duration(700)
      .iterations(1)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'translateY(30px)' },
        { offset: 0.3, opacity: '0.3', transform: 'translateY(20px)' },
        { offset: 0.7, opacity: '0.7', transform: 'translateY(10px)' },
        { offset: 1, opacity: '1', transform: 'translateY(0px)' },
      ]);
    animation.play();
  }

}
