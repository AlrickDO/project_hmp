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
  // game_list: any[] = []
  selectedYear: any = 'All';
  availableYears: number[] = [];
  // filteredAchievements: any[] = [];
  ach_list: any[] = [];

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }

  constructor(private route: ActivatedRoute, private games: GamesService, private animationCtrl:AnimationController) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.index = params['index']

        this.games.getAchievements(params['index']).subscribe(
          (data) => {
            this.ach_list = data
          }
        )

        this.games.getAchYears().subscribe(
          (data) => {
            this.availableYears = data
          }
        )
      }
    )
    // this.game_list = this.games.games
    // this.loadAchievements();
  }

  ionViewDidEnter(){
    this.fadeInImage()
    this.fadeInFilter()
    this.animateList()
  }

  fadeInFilter() {
    const item = document.querySelector('#filter-box') as HTMLElement;
    const animation = this.animationCtrl
      .create()
      .addElement(item)
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
    this.ach_list.forEach((_, i) => {
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
    const item = document.querySelector('#game-image') as HTMLElement;
    const animation = this.animationCtrl
      .create()
      .addElement(item)
      .duration(350) 
      .iterations(1) 
      .keyframes([
        { offset: 0, opacity: '0'}, 
        { offset: 0.5, opacity: '0.5'},
        { offset: 1, opacity: '1'},
      ]);
    animation.play();
  }

  // loadAchievements() {
  //   this.allAchievements = [];
    
  //   const game = this.game_list[this.index];

  //   game.achievements.forEach((achievement: any) => {
  //     this.allAchievements.push(achievement);
  //     if (!this.availableYears.includes(achievement.year)) {
  //       this.availableYears.push(achievement.year);
  //     }
  //   });

  //   this.availableYears.sort((a, b) => b - a);
  //   this.filterAchievements();
  //   this.animateList()
  // }

  filterAchievements() {
    this.route.params.subscribe(
      params => {
        if (this.selectedYear === 'All') {
          this.games.getAchievements(params['index']).subscribe(
            (data)=> {
                this.ach_list = data;
              }
           );
        } else {
          this.games.getFilteredAchievements(params['index'], this.selectedYear).subscribe(
            (data)=> {
                this.ach_list = data;
              }
           );
        }
      }
    )
  }
}
