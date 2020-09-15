import { Component } from "@angular/core";
import { User } from "./shared/user/user.model";

@Component({
  selector: "gr-login",
  moduleId: module.id,
  templateUrl: "./login/login.component.html",
  styleUrls: ["./login/login.component.css"]
})
export class AppComponent {
  user: User;
  isLoggingIn = true;

  constructor() {
    this.user = new User();
  }

  submit() {
    alert("You’re using: " + this.user.email);
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}