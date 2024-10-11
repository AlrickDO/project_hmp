import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {
  index = 0
  game_list: any[] = []
  teams: any[] = []

  constructor(private route: ActivatedRoute, private games: GamesService,private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.index = params['index']
      }
    )
    this.game_list = this.games.games
    this.teams = this.game_list[this.index].teams
  }

  openTeamMembers(teamIndex: number) {
    this.router.navigate([`/teams/${this.index}/team-members`, this.index, teamIndex]);
  }
}
