import { Component, OnInit } from "@angular/core";
import { CrudService } from "../service/crud.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { User } from "../User";
import { Location } from "@angular/common";

@Component({
  selector: "app-create-user",
  templateUrl: "./create-user.component.html",
  styleUrls: ["./create-user.component.css"],
})
export class CreateUserComponent implements OnInit {
  user: User = new User();
  userForm: FormGroup;

  constructor(private userService: CrudService, private location: Location) {}

  ngOnInit(): void {
    this.reLoadForm();
  }

  reLoadForm() {
    this.userForm = new FormGroup({
      userName: new FormControl("", [Validators.required]),
      userEmail: new FormControl("", [Validators.required, Validators.email]),
      userPhone: new FormControl("", [Validators.required]),
      userAvatar: new FormControl(
        "https://cdn3.vectorstock.com/i/1000x1000/72/27/male-avatar-profile-icon-round-man-face-vector-18307227.jpg"
      ),
    });
  }

  createUser(userData) {
    this.user.name = userData.get("userName").value;
    this.user.email = userData.get("userEmail").value;
    this.user.phone = userData.get("userPhone").value;
    this.user.avatar = userData.get("userAvatar").value;

    this.userService.createUser(this.user).subscribe((data) => {
      alert(`Thêm mới thành công người dùng : ${this.user.name}`);
      this.reLoadForm();
      this.user = new User();
    });
  }

  backClicked() {
    this.location.back();
  }
}
