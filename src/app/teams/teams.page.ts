import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {
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
