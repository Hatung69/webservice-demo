import { WaetherPageComponent } from "./weather/waether-page/waether-page.component";
import { MoviePageComponent } from "./movie/movie-page/movie-page.component";
import { CreateUserComponent } from "./crud/create-user/create-user.component";
import { UserDetailComponent } from "./crud/user-detail/user-detail.component";
import { HomeComponent } from "./home/home.component";
import { CrudPageComponent } from "./crud/crud-page/crud-page.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "crud", component: CrudPageComponent },
  { path: "crud/user-detail/:userId", component: UserDetailComponent },
  { path: "crud/create-user", component: CreateUserComponent },
  { path: "movie", component: MoviePageComponent },
  { path: "weather", component: WaetherPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
