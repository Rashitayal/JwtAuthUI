import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials= {
    username:"",
    password:""
  }

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.loginService.authenticate(this.credentials).subscribe((response:any) => {
      this.loginService.storeToken(response.token);
      window.location.href="/dashboard";
    }, error=> {});
  }

}
