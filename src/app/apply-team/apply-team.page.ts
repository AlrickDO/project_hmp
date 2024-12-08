import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-apply-team',
  templateUrl: './apply-team.page.html',
  styleUrls: ['./apply-team.page.scss'],
})
export class ApplyTeamPage implements OnInit {
  listProposal : any[] = []
  constructor(private gameService:GamesService) { }

  ngOnInit() {
    this.gameService.getProposals().subscribe(
      (data)=> {
          this.listProposal = data;
        }
     );
  }

}
