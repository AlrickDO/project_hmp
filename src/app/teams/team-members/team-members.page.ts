import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/games.service';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private route: ActivatedRoute, private games: GamesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.gameIndex = params['gameIndex'];
      this.teamIndex = params['teamIndex'];

      // Get the specific team using the indexes
      this.game = this.games.games[this.gameIndex];
      this.team = this.game.teams[this.teamIndex];
    });
  }

}
