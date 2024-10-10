import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor() { }

  games = [
    // Sea of Thieves
    {
      id: 1,
      name: 'Sea of Thieves',
      description: 'Sea of Thieves is a smash-hit pirate adventure game, offering the quintessential pirate experience of plundering lost treasures, intense battles, vanquishing sea monsters and more. Dive in with this revised edition of the game, which includes access to digital bonus media.',
      image: 'assets/img/seaOfThieves.jpg',
      achievements: [{
        id: 1,
        name: 'SoT Hourglass Cup 2nd Place',
        year: 2022,
        team: "Team Ginjal"
      }, {
        id: 2,
        name: 'Sea of Krakens 1st Place',
        year: 2021,
        team: "Team Ginjal"
      }, {
        id: 3,
        name: "Sea of Seas 2nd Place",
        year: 2021,
        team: "Team Empedu"
      }],
      teams: [{
        id: 1,
        name: "Team Ginjal",
        members: [{
          id: 1,
          name: 'Alrick',
          image: 'assets/img/alrick.png'
        }, {
          id: 2,
          name: 'Jasmine',
          image: 'assets/img/jasmine.png'
        }]
      }, {
        id: 2,
        name: "Team Jantung",
        members: [{
          id: 1,
          name: 'Syarif',
          image: 'assets/img/syarif.png'
        }, {
          id: 2,
          name: "Lina",
          image: 'assets/img/lina.png'
        }]
      }, {
        id: 3,
        name: "Team Empedu",
        members: [{
          id: 1,
          name: "Patrick",
          image: "assets/img/patrick.png"
        }, {
          id: 2,
          name: "Mel",
          image: "assets/img/mel.png"
        }]
      }]
    },

    // Dota 2
    {
      id: 2,
      name: 'Dota 2',
      description: 'Every day, millions of players worldwide enter battle as one of over a hundred Dota heroes. And no matter if its their 10th hour of play or 1,000th, theres always something new to discover. With regular updates that ensure a constant evolution of gameplay, features, and heroes, Dota 2 has taken on a life of its own.',
      image: 'assets/img/dota2.jpg',
      achievements: [{
        id: 1,
        name: 'The International',
        year: 2018,
        team: "AN 49"
      }, {
        id: 2,
        name: 'Balikpapan Major',
        year: 2019,
        team: "AN 49"
      }, {
        id: 3,
        name: "Rungkut Minor",
        year: 2018,
        team: "AM 8"
      }],
      teams: [{
        id: 1,
        name: "AM 8",
        members: [{
          id: 1,
          name: 'Lucy',
          image: 'assets/img/lucy.png'
        }, {
          id: 2,
          name: 'Ariel',
          image: 'assets/img/ariel.png'
        }]
      }, {
        id: 2,
        name: "AN 49",
        members: [{
          id: 1,
          name: 'Cody',
          image: 'assets/img/cody.png'
        }, {
          id: 2,
          name: "Putra",
          image: 'assets/img/putra.png'
        }]
      }, {
        id: 3,
        name: "KK 8",
        members: [{
          id: 1,
          name: "Nico",
          image: "assets/img/nico.png"
        }, {
          id: 2,
          name: "Reynald",
          image: "assets/img/reynald.png"
        }]
      }]
    }
  ];

  getGames() {
    return this.games;
  }
}
