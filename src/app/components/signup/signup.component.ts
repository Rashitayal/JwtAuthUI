import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  data = {
    username:'',
    password:''
  }

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.loginService.signup(this.data).subscribe((response:any) => {
      this.loginService.storeToken(response.token);
      window.location.href="/dashboard";
    }, error=> {});
  }

}
