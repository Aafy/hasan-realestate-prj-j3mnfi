import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../user/auth.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  pageTitle = "New User Sign Up Form";

  ngOnInit() {}
  onSignUp(uname: string, psw: string) {
    console.log(uname, psw);
    let creds = {
      userName: uname,
      password: psw
    };
    this.router.navigate(["/login"]);
    this.authService.createUsers(creds);
  }
}
