import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
  templateUrl: "./login.component.html"
})
export class LoginComponent {
  errorMessage: string;
  pageTitle = "Log In";

  constructor(private authService: AuthService, private router: Router) {}

  login(loginForm: NgForm) {
    const userName = loginForm.form.value.userName;
    const password = loginForm.form.value.password;
    let getIndex = this.authService.users.findIndex(
      x => x.password === password && x.userName === userName
    );

    if (getIndex >= 0) {
      this.authService.login(userName, password);
      if (this.authService.redirectUrl) {
        this.router.navigateByUrl(this.authService.redirectUrl);
      } else {
        this.router.navigate(["/products"]);
      }
    } else {
      this.errorMessage = "Please enter valid user name and password.";
    }
  }
}
