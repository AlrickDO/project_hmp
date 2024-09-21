import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-schedule',
  templateUrl: './our-schedule.page.html',
  styleUrls: ['./our-schedule.page.scss'],
})
export class OurSchedulePage implements OnInit {

  scheduleData = [
    { date: '05 SEP', event: 'Regional Qualifier - Valorant', team: 'Team Empedu' },
    { date: '20 SEP', event: 'Grand Final - Mobile Legends', team: 'Team Ginjal' },
    { date: '29 SEP', event: 'Group Stage - CS2', team: 'Team Jantung' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
