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

  register(p_fname: string, p_lname: string,p_uname: string, p_pass: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('fname', p_fname);
    body.set('lname', p_lname);
    body.set('username', p_uname);
    body.set('password', p_pass);
    const urlEncodedData = body.toString();
    return this.http.post(this.link + "register.php", urlEncodedData, { headers });

  }

  cekUsername(username:string){
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('username', username.toString());
    const urlEncodedData = body.toString();

    return this.http.post(this.link + "cekUser.php", urlEncodedData, { headers });
  }

  deleteNotification(idevent:number){
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('username', localStorage.getItem("app_username") ?? '');
    body.set('idevent', idevent.toString());
    const urlEncodedData = body.toString();
    return this.http.post(
      this.link + "delete_notification.php", urlEncodedData, { headers });
  }

  cekNotification(idevent:number){
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('idevent', idevent.toString());
    body.set('username', localStorage.getItem("app_username") ?? '');
    const urlEncodedData = body.toString();

    return this.http.post(this.link + "check_notification.php", urlEncodedData, { headers });
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

  insertNotification(idevent:number) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('username', localStorage.getItem("app_username") ?? '');
    body.set('idevent', idevent.toString());
    const urlEncodedData = body.toString();
    return this.http.post(
      this.link + "new_notification.php", urlEncodedData, { headers });

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

  getGame(idgame:number){
    return this.http.get(this.link + "get_game.php?idgame=" + idgame)
  }

  getGameList(): Observable<any>{
    return this.http.get(this.link + "game_list.php")
  }

  //member belum, tahan dulu
  

  

  // getGames() {
  //   return this.games;
  // }
}
