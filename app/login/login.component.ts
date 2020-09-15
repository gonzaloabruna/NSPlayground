import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../shared/user/user.model";
import { UserService } from "../shared/user/user.service";

@Component({
  selector: "gr-login",
  providers: [UserService],
  moduleId: module.id,
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  user: User;
  isLoggingIn = true;

  constructor(private router: Router, private userService: UserService) {
    this.user = new User();
    this.user.email = "test1234@test.com";
    this.user.password = "test";
  }

  submit() {
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }

  login() {
    this.userService.login(this.user)
      .subscribe(
        () => this.router.navigate(["/list"]),
        (exception) => {
            if(exception.error && exception.error.description) {
                alert(exception.error.description);
            } else {
                alert(exception)
            }
        }
      );
  }

  signUp() {
    this.userService.register(this.user)
    .subscribe(
      () => {
        alert("Your account was successfully created.");
        this.toggleDisplay();
      },
      (exception) => {
          if(exception.error && exception.error.description) {
              alert(exception.error.description);
          } else {
              alert(exception)
          }
      }
    );
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}