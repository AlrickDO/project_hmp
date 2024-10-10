import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';

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

  constructor(private route: ActivatedRoute, private games: GamesService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.index = params['index']
      }
    )
    this.game_list = this.games.games
    this.loadAchievements();
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
