import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  constructor(private router: Router) {}
  pageTitle = "New User Sign Up Form";

  ngOnInit() {}
  onSignUp(uname: string, psw: string) {
    console.log(uname, psw);
    this.router.navigate(["/login"]);
  }
}
