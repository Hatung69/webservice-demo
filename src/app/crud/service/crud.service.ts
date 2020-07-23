import { User } from "./../User";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { of } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CrudService {
  private baseUrl: string = "http://user-restful.j.layershift.co.uk/api/users";

  constructor(private http: HttpClient) {}

  getListUser(): Observable<User[]> {
    return this.http
      .get<User[]>(`${this.baseUrl}`)
      .pipe(catchError((err) => of`Catch error: ${err}`));
  }

  getUserById(userId: string): Observable<User> {
    return this.http
      .get<User>(`${this.baseUrl}/${userId}`)
      .pipe(catchError((err) => of`Catch error: ${err}`));
  }

  createUser(user: User): Observable<User> {
    return this.http
      .post(`${this.baseUrl}`, user)
      .pipe(catchError((err) => of`Catch error: ${err}`));
  }

  updateUser(user: User, userId: string): Observable<User> {
    return this.http
      .put(`${this.baseUrl}/${userId}`, user)
      .pipe(catchError((err) => of`Catch error: ${err}`));
  }

  deleteUser(userId: string): Observable<User> {
    return this.http
      .delete(`${this.baseUrl}/${userId}`)
      .pipe(catchError((err) => of`Catch error: ${err}`));
  }

  searchUser(userName: string): Observable<User[]> {
    return this.http
      .get<User[]>(`${this.baseUrl}?searchName=${userName}`)
      .pipe(catchError((err) => of`Catch error: ${err}`));
  }
}
