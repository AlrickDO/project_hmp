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
  teams: any[] = [];
  notified = false;

  constructor(private route: ActivatedRoute, private games: GamesService, private animationCtrl: AnimationController) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.games.getEventDetail(params['index']).subscribe(
          (data) => {
            this.selectedSchedule = data
          }
        )

        this.games.cekNotification(params['index']).subscribe(
          (response: any) => {
            if (response.result === 'yes') {
              this.notified =true;
            }
            else {
              this.notified =false;
            }
          }
        )

        this.games.getEventTeams(params['index']).subscribe(
          (data) => {
            this.teams = data
          }
        )
      }
    )

    // this.route.params.subscribe(
    //   params => {

    //   }
    // )
  }

  btnNotify() {
    if(this.notified == false){
      this.notified = true
      this.route.params.subscribe(
        params => {
          this.games.insertNotification(params['index']).subscribe(
            (response: any) => {
              if (response.result === 'success') {
                alert("Notification Saved");
              }
              else{
                alert('Failed')
              }
            }
          )
        })
      
    }
    else{
      this.notified = false
      this.route.params.subscribe(
        params => {
          this.games.deleteNotification(params['index']).subscribe(
            (response: any) => {
              if (response.result === 'success') {
                alert("Notification Deleted");
              }
              else{
                alert('Failed')
              }
            }
          )
        })
    }
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }

  ionViewDidEnter() {
    this.fadeInCard()
  }

  fadeInCard() {
    const avatarElement = document.querySelector('#card-schedule') as HTMLElement;
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
