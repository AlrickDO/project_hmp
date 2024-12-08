import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {
  index = 0
  teams: any[] = []

  constructor(private animationCtrl: AnimationController,private route: ActivatedRoute, private games: GamesService,private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.index = params['index']

        this.games.getTeams(params['index']).subscribe(
          (data) => {
            this.teams = data
          }
        )
      }
    )
  }

  openTeamMembers(teamIndex: number) {
    this.router.navigate(['/teams/${this.index}/team-members', this.index, teamIndex]);
  }

  ionViewDidEnter(){
    this.fadeInImage()
    this.animateList()
  }

  animateList() {
    this.teams.forEach((_, i) => {
      const item = document.querySelector(`#teamList${i}`) as HTMLElement;

      setTimeout(() => {
        const animation = this.animationCtrl
          .create()
          .addElement(item)
          .duration(700)
          .delay(350) 
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

  fadeInImage() {
    const avatarElement = document.querySelector('#game-image') as HTMLElement;
    const animation = this.animationCtrl
      .create()
      .addElement(avatarElement)
      .duration(350) 
      .iterations(1) 
      .keyframes([
        { offset: 0, opacity: '0'}, 
        { offset: 0.5, opacity: '0.5'},
        { offset: 1, opacity: '1'},
      ]);
    animation.play();
  }
}
