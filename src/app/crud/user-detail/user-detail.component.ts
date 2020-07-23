import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CrudService } from "../service/crud.service";
import { Location } from "@angular/common";
import { User } from "../User";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.css"],
})
export class UserDetailComponent implements OnInit {
  userId: string;
  user: User;
  userUpdate: User = new User();

  userForm = new FormGroup({
    userName: new FormControl([Validators.required]),
    userEmail: new FormControl([Validators.required]),
    userPhone: new FormControl([Validators.required]),
    userAvatar: new FormControl([Validators.required]),
  });

  constructor(
    private route: ActivatedRoute,
    private userService: CrudService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get("userId");
    this.loadUser();
  }

  loadUser() {
    this.userService.getUserById(this.userId).subscribe((data) => {
      this.user = data;
    });
  }

  backClicked() {
    this.location.back();
  }

  loadUpdateUser(userId: string) {
    this.userService
      .getUserById(userId)
      .subscribe((data) => (this.userUpdate = data));
  }

  updateUser(userData) {
    this.userUpdate.name = userData.get("userName").value;
    this.userUpdate.email = userData.get("userEmail").value;
    this.userUpdate.phone = userData.get("userPhone").value;
    this.userUpdate.avatar = userData.get("userAvatar").value;
    console.log(this.userUpdate);

    this.userService
      .updateUser(this.userUpdate, this.userUpdate.id)
      .subscribe((data) => {
        alert(`Cập nhật thành công người dùng : ${this.userUpdate.name}`);
        this.loadUser();
      });
  }

  deleteUser(userId: string) {
    this.userService.deleteUser(userId).subscribe((data) => {
      alert(`Xoá thành công !`);
      this.backClicked();
    });
  }
}
