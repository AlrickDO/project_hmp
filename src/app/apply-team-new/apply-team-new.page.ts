import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-team-new',
  templateUrl: './apply-team-new.page.html',
  styleUrls: ['./apply-team-new.page.scss'],
})
export class ApplyTeamNewPage implements OnInit {
  gameList: any[] = []
  teamList: any[] = []
  desc:string='';
  selectedIdGame: number = 0;
  selectedIdTeam: number=0;
  constructor(private gameService: GamesService, private router:Router) { }

  ngOnInit() {
    this.gameService.getGameList().subscribe(
      (data) => {
        this.gameList = data;
      }
    );
  }

  submitProposal(){
    this.gameService.insertProposal(this.selectedIdTeam, this.desc).subscribe(
      (response: any) => {
        if (response.result === 'success') {
          alert("Proposal submitted");
          this.router.navigate(['/apply-team']).then(() => {
            window.location.reload();
          });
        }
        else{
          alert('Submission Failed')
        }
      }
    )
  }

  showTeams() {
    if (this.selectedIdGame) {
      // Fetch the teams for the selected game
      this.gameService.getTeams(this.selectedIdGame).subscribe((data) => {
        this.teamList = data;
      });
    } else {
      // Clear the team list if no game is selected
      this.teamList = [];
    }
  }

}
