import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) {
  }
  errorMessage: string = '';


  ngOnInit() {
  }
  tryLogin(){
    let email = (<HTMLInputElement> document.getElementById("email")).value;
    let password = (<HTMLInputElement> document.getElementById("password")).value;
    let password_confirmation = (<HTMLInputElement> document.getElementById("password_confirmation")).value;

    if(password === password_confirmation){

    this.authService.doLogin(email,password)
    .then(res => {
      //this.router.navigate(['/user']);
      alert("logeado");
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    })
  }
  else{
    alert("Incorrect password");
    email = "";
    password = "";
    password_confirmation = "";
  }
  }
}
