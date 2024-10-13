import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-schedule',
  templateUrl: './our-schedule.page.html',
  styleUrls: ['./our-schedule.page.scss'],
})
export class OurSchedulePage implements OnInit {
  scheduleData: any[]=[];

  constructor(private games : GamesService, private router: Router) { }

  ngOnInit() {
    this.scheduleData = this.games.schedule;
  }

}
