import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.page.html',
  styleUrls: ['./achievement.page.scss'],
})
export class AchievementPage implements OnInit {
  index = 0
  game_list: any[] = []
  selectedYear: string = 'All';
  availableYears: number[] = [];
  filteredAchievements: any[] = [];
  allAchievements: any[] = [];

  constructor(private route: ActivatedRoute, private games: GamesService, private animationCtrl:AnimationController) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.index = params['index']
      }
    )
    this.game_list = this.games.games
    this.loadAchievements();
  }

  ionViewDidEnter(){
    this.fadeInImage()
    this.fadeInFilter()
    this.animateList()
  }

  fadeInFilter() {
    const avatarElement = document.querySelector('#filter-box') as HTMLElement;
    const animation = this.animationCtrl
      .create()
      .addElement(avatarElement)
      .duration(500) 
      .iterations(1) 
      .keyframes([
        { offset: 0, opacity: '0'}, 
        { offset: 0.5, opacity: '0.5'},
        { offset: 1, opacity: '1'},
      ]);
    animation.play();
  }

  animateList() {
    this.filteredAchievements.forEach((_, i) => {
      const item = document.querySelector(`#achievementList${i}`) as HTMLElement;

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

  loadAchievements() {
    this.allAchievements = [];
    
    const game = this.game_list[this.index];

    game.achievements.forEach((achievement: any) => {
      this.allAchievements.push(achievement);
      if (!this.availableYears.includes(achievement.year)) {
        this.availableYears.push(achievement.year);
      }
    });

    this.availableYears.sort((a, b) => b - a);
    this.filterAchievements();
    this.animateList()
  }

  filterAchievements() {
    if (this.selectedYear === 'All') {
      this.filteredAchievements = this.allAchievements;
    } else {
      this.filteredAchievements = this.allAchievements.filter(
        achievement => achievement.year === parseInt(this.selectedYear)
      );
    }
  }
}
