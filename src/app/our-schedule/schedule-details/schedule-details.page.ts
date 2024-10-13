import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/games.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.page.html',
  styleUrls: ['./schedule-details.page.scss'],
})
export class ScheduleDetailsPage implements OnInit {
  index = 0;
  selectedSchedule: any;

  constructor( private route: ActivatedRoute, private games: GamesService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.index = params['index']
      }
    )
    this.selectedSchedule = this.games.schedule[this.index];
  }

}
