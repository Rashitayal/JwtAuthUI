import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn = false;
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loggedIn = this.loginService.isLoggedIn();
    if(this.loggedIn){
       this.loginService.getUserName().subscribe((response:any) => {
        document.getElementById("userName").innerText  =response.username;
      }, error=> {});
    }
  }

  logout(){
    this.loginService.logout();
    location.reload();
  }

}
