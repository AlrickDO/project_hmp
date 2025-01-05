import { Component } from '@angular/core';
import { GamesService } from './games.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  username=""
  password = ""
  fullname=""
  regform:boolean= false;

  reg_fname=""
  reg_lname=""
  reg_uname=""
  reg_pass=""
  reg_conpass=""
  terms_check = false;

  constructor(private gameservice: GamesService) {
    this.username = localStorage.getItem("app_username") ?? ''
    this.fullname = localStorage.getItem("app_fullname") ?? ''
  }
  setReg(){
    if(this.regform==false){
      this.regform = true
    }
    else{
      this.regform = false
    }
  }
  
  register(){
    this.gameservice.cekUsername(this.reg_uname).subscribe(
      (response: any) => {
        if (response.result === 'success') {
          if(this.reg_pass == this.reg_conpass){
            this.gameservice.register(this.reg_fname, this.reg_lname, this.reg_uname, this.reg_pass).subscribe(
              (response: any) => {
                if (response.result === 'success') {
                  alert(response.message);
                  this.regform = false
                } else {
                  alert(response.message)
                }
              }
            )
          }
          else{
            alert("Password berbeda")
          }
        }
        else {
          alert(response.message)
        }
      });
  }

  onCheck(event: any) {
    if(event.detail.checked) {
      this.terms_check = true
    } else if (!event.detail.checked) {
      this.terms_check = false
    }
  }

  logout() {
    this.username = ""
    this.fullname = ""
    localStorage.removeItem("app_username")
    localStorage.removeItem("app_fullname")
  }

  login() {
    this.gameservice.login(this.username, this.password).subscribe(
      (response: any) => {
        if (response.result === 'success') {
          alert("success")
          this.fullname = response.fname + ' ' + response.lname
          localStorage.setItem("app_username", this.username)
          localStorage.setItem("app_fullname", this.fullname)
        }
        else {
          alert(response.message)
        }
      });

  }
}
