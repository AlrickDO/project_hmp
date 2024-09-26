import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-we-play',
  templateUrl: './what-we-play.page.html',
  styleUrls: ['./what-we-play.page.scss'],
})
export class WhatWePlayPage implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  games = [
    {
      id: 1,
      name: 'Sea of Thieves',
      description: 'Sea of Thieves is a smash-hit pirate adventure game, offering the quintessential pirate experience of plundering lost treasures, intense battles, vanquishing sea monsters and more. Dive in with this revised edition of the game, which includes access to digital bonus media.',
      image: 'assets/img/seaOfThieves.jpg'
    },
    {
      id: 2,
      name: 'Dota 2',
      description: 'Every day, millions of players worldwide enter battle as one of over a hundred Dota heroes. And no matter if its their 10th hour of play or 1,000th, theres always something new to discover. With regular updates that ensure a constant evolution of gameplay, features, and heroes, Dota 2 has taken on a life of its own.',
      image: 'assets/img/dota2.jpg'
    }
  ];
}
