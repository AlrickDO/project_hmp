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
  game_list :any[]=[]
  constructor(private route: ActivatedRoute,private games : GamesService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.index = params['index']
      }
    )
    this.game_list = this.games.games
  }

}
