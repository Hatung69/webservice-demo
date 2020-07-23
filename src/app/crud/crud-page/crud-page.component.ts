import { User } from "./../User";
import { CrudService } from "./../service/crud.service";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { of } from "rxjs";

@Component({
  selector: "app-crud-page",
  templateUrl: "./crud-page.component.html",
  styleUrls: ["./crud-page.component.css"],
})
export class CrudPageComponent implements OnInit {
  listUser: User[];
  userUpdate: User = new User();

  userForm = new FormGroup({
    userName: new FormControl([Validators.required]),
    userEmail: new FormControl([Validators.required]),
    userPhone: new FormControl([Validators.required]),
    userAvatar: new FormControl([Validators.required]),
  });

  constructor(private userService: CrudService) {}

  ngOnInit(): void {
    this.loadListUser();
  }

  loadListUser() {
    this.userService.getListUser().subscribe((data) => {
      this.listUser = data;
    });
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
        this.loadListUser();
      });
  }

  deleteUser(userId: string) {
    this.userService.deleteUser(userId).subscribe((data) => {
      alert(`Xoá thành công !`);
      this.loadListUser();
    });
  }

  searchUser(event) {
    this.userService.searchUser(event.target.value).subscribe((data) => {
      this.listUser = data;
    });
  }
}
