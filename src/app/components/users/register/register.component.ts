import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: "register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  register() {
    //Get all input values in register form
    let first_name = (<HTMLInputElement> document.getElementById("first_name")).value;
    let last_name = (<HTMLInputElement> document.getElementById("last_name")).value;
    let real_user = (<HTMLInputElement> document.getElementById("display_name")).value;
    let fake_user = (<HTMLInputElement> document.getElementById("display_name2")).value;
    let email = (<HTMLInputElement> document.getElementById("email")).value;
    let password = (<HTMLInputElement> document.getElementById("password")).value;
    let password_confirmation = (<HTMLInputElement> document.getElementById("password_confirmation")).value;

    if(password === password_confirmation){
      this.authService.registerUser(email,password).then((res)=>{
        console.log("Registered");
      }).catch(err => console.log('err',err.message));
    } else{
      alert("Incorrect password");
    }
    
    first_name = "";
    last_name = "";
    real_user = "";
    fake_user = "";
    email = "";
    password = "";
    password_confirmation = "";
  }

}
