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
          image: 'assets/img/alrick.png',
          role: "Carry"
        }, {
          id: 2,
          name: 'Jasmine',
          image: 'assets/img/jasmine.png',
          role: "Support"
        }]
      }, {
        id: 2,
        name: "Team Jantung",
        members: [{
          id: 1,
          name: 'Syarif',
          image: 'assets/img/syarif.png',
          role: "Cannoneer"
        }, {
          id: 2,
          name: "Lina",
          image: 'assets/img/lina.png',
          role: "Sailor"
        }]
      }, {
        id: 3,
        name: "Team Empedu",
        members: [{
          id: 1,
          name: "Patrick",
          image: "assets/img/patrick.png",
          role: "Carry"
        }, {
          id: 2,
          name: "Mel",
          image: "assets/img/mel.png",
          role: "Support"
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
          image: 'assets/img/lucy.png',
          role: "Captain"
        }, {
          id: 2,
          name: 'Ariel',
          image: 'assets/img/ariel.png',
          role: "Support"
        },{
          id: 3,
          name: 'Ronaldo',
          image: 'assets/img/ronaldo.png',
          role: "Offlane"
        },{
          id: 4,
          name: 'Armel',
          image: 'assets/img/armel.png',
          role: "Midlane"
        },{
          id: 5,
          name: 'Luca',
          image: 'assets/img/luca.png',
          role: "Safe"
        }]
      }, {
        id: 2,
        name: "AN 49",
        members: [{
          id: 1,
          name: 'Cody',
          image: 'assets/img/cody.png',
          role: 'Hyper'
        }, {
          id: 2,
          name: "Putra",
          image: 'assets/img/putra.png',
          role: 'Jungle'
        },{
          id: 3,
          name: 'Desmond',
          image: 'assets/img/desmond.png',
          role: "Mid"
        },{
          id: 4,
          name: 'Laura',
          image: 'assets/img/laura.png',
          role: "Gold"
        },{
          id: 5,
          name: 'Nicole',
          image: 'assets/img/nicole.png',
          role: "XP"
        }]
      }, {
        id: 3,
        name: "KK 8",
        members: [{
          id: 1,
          name: "Nico",
          image: "assets/img/nico.png",
          role: 'Duelist'
        }, {
          id: 2,
          name: "Reynald",
          image: "assets/img/reynald.png",
          role: 'Operator'
        },{
          id: 3,
          name: 'Vex',
          image: 'assets/img/vex.png',
          role: "Sentinel"
        },{
          id: 4,
          name: 'Nyx',
          image: 'assets/img/nyx.png',
          role: "Controller"
        },{
          id: 5,
          name: 'Sucipto',
          image: 'assets/img/sucipto.png',
          role: "Initiator"
        }]
      }]
    }
  ];

  schedule = [
    { date: '05 SEP',venue:"Grand Surya Balikpapan", event: 'Regional Qualifier - Valorant', team: 'Team Empedu', image: 'assets/img/sc1.png',
      description:"Teams from around the world will face off in strategic battles across iconic maps, blending deadly gunplay with clever abilities. With $500,000 on the line, it's a fight for dominance where one split-second decision can make or break a team's run to victory." },
    { date: '20 SEP',venue:"Best Western Surabaya", event: 'Grand Final - Mobile Legends', team: 'Team Ginjal', image:'assets/img/sc2.png',
      description:"In this high-octane 5v5 MOBA, teams must display flawless teamwork, rapid rotations, and smart hero picks to outplay their opponents. The stakes are high, with a $300,000 prize pool, and only the strongest will emerge victorious in this electrifying mobile esports event!" },
    { date: '29 SEP',venue:"Colosseum California",event: 'Group Stage - Dota 2', team: 'Team Jantung', image: 'assets/img/sc3.png',
      description:"With intense team fights, mind-blowing strategies, and legendary hero plays, this competition will test every team's coordination and endurance. With a $1 million prize pool and a shot at eternal glory, only the most determined team will survive the climb to the top of the leaderboard!" },
  ];

  getGames() {
    return this.games;
  }
}
