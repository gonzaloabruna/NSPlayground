import { Component } from "@angular/core";

@Component({
  selector: "gr-login",
  moduleId: module.id,
  templateUrl: "./login/login.component.html",
  styleUrls: ["./login/login.component.css"]
})
export class AppComponent {
  email = "nativescriptrocks@progress.com";
  isLoggingIn = true;

  submit() {
    alert("You’re using: " + this.email);
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}