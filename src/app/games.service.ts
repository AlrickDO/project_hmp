import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }
  link = "https://ubaya.xyz/hybrid/160422014/project/";

  login(username: string, password:string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('username', username.toString());
    body.set('password', password.toString());
    const urlEncodedData = body.toString();

    return this.http.post(this.link + "login.php", urlEncodedData, { headers });
  }

  countLikes(){
    return this.http.get(this.link + "like_count.php")
  }

  likeStatus(){
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('username', localStorage.getItem("app_username") ?? '');
    const urlEncodedData = body.toString();
    return this.http.post(this.link + "like_status.php", urlEncodedData, { headers });
  }

  getEventList(): Observable<any>{
    return this.http.get(this.link + "event_list.php");
  }

  getEventTeams(eventId :number): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('eventId', eventId.toString())
    const urlEncodedData = body.toString();
    return this.http.post(this.link + "event_team.php", urlEncodedData, { headers });
  }

  getTeams(idgame :number): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('idgame', idgame.toString())
    const urlEncodedData = body.toString();
    return this.http.post(this.link + "team_list.php", urlEncodedData, { headers });
  }

  getMembers(idteam :number): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('idteam', idteam.toString())
    const urlEncodedData = body.toString();
    return this.http.post(this.link + "member_list.php", urlEncodedData, { headers });
  }

  getProposals(): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('username', localStorage.getItem("app_username") ?? '');
    const urlEncodedData = body.toString();
    return this.http.post(this.link + "proposal_list.php", urlEncodedData, { headers });
  }

  getAchYears(): Observable<any>{
    return this.http.get(this.link + "ach_year.php");
  }

  getTeamData(idteam:number): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('idteam', idteam.toString())
    const urlEncodedData = body.toString();
    return this.http.post(this.link + "get_team.php", urlEncodedData, { headers });
  }

  getAchievements(idgame :number): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('idgame', idgame.toString())
    const urlEncodedData = body.toString();
    return this.http.post(this.link + "ach_list.php", urlEncodedData, { headers });
  }

  insertProposal(idteam:number, description:string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('username', localStorage.getItem("app_username") ?? '');
    body.set('idteam', idteam.toString());
    body.set('description', description);
    const urlEncodedData = body.toString();
    return this.http.post(
      this.link + "new_proposal.php", urlEncodedData, { headers });

  }

  getFilteredAchievements(idgame :number,year:number): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('idgame', idgame.toString())
    body.set('year', year.toString())
    const urlEncodedData = body.toString();
    return this.http.post(this.link + "ach_filter.php", urlEncodedData, { headers });
  }

  getEventDetail(id:number){
    return this.http.get(this.link + "event_detail.php?id=" + id)
  }

  likeUpdate(likeInt : number){
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('username', localStorage.getItem("app_username") ?? '');
    body.set('likeint', likeInt.toString())
    const urlEncodedData = body.toString();
    return this.http.post(this.link + "like_update.php", urlEncodedData, { headers });
  }

  getGameList(): Observable<any>{
    return this.http.get(this.link + "game_list.php")
  }

  //member belum, tahan dulu
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

  

  // getGames() {
  //   return this.games;
  // }
}
