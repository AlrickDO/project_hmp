import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/games.service';
import { ActivatedRoute } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.page.html',
  styleUrls: ['./team-members.page.scss'],
})
export class TeamMembersPage implements OnInit {
  gameIndex = 0;
  teamIndex = 0;
  team: any;
  game: any;
  memberList: any[] = [];
  constructor(private route: ActivatedRoute, private games: GamesService, private animationCtrl:AnimationController) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.gameIndex = params['gameIndex'];
      this.teamIndex = params['teamIndex'];

      // Get the specific team using the indexes
      // this.game = this.games.games[this.gameIndex];
      // this.team = this.game.teams[this.teamIndex];
      // this.memberList = this.team.members
      this.games.getTeamData(this.teamIndex).subscribe(
        (data) => {
          this.team = data
        }
      )


      this.games.getMembers(this.teamIndex).subscribe(
        (data) => {
          this.memberList = data
        }
      )
    });
  }

  ionViewDidEnter() {
    this.animateList()
    this.fadeInImage()
  }

  fadeInImage(){
    const avatarElement = document.querySelector('#gameImage') as HTMLElement;
    const animation = this.animationCtrl
      .create()
      .addElement(avatarElement)
      .duration(500) 
      .iterations(1) 
      .keyframes([
        { offset: 0, opacity: '0' }, 
        { offset: 0.5, opacity: '0.5' },
        { offset: 1, opacity: '1' },
      ]);
    animation.play();
  }

  animateList() {
    this.memberList.forEach((_, i) => {
      const item = document.querySelector(`#memberItem${i}`) as HTMLElement;

      setTimeout(() => {
        const animation = this.animationCtrl
          .create()
          .addElement(item)
          .duration(700)
          .delay(500) 
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
