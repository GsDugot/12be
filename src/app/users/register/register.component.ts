import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: "register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {

  constructor(public authService: AngularFireAuth) {}

  ngOnInit() {
    //Add click listener to register button
    document.getElementById("registerbutton").addEventListener("click", this.register);
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
      
    } else{
      alert("Incorrect password");
    }
  }

}
