import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-what-we-play',
  templateUrl: './what-we-play.page.html',
  styleUrls: ['./what-we-play.page.scss'],
})
export class WhatWePlayPage implements OnInit {
  constructor(private games: GamesService) { }
  game_list: any[] = []

  ngOnInit() {
    this.game_list = this.games.games
  }

  
}
