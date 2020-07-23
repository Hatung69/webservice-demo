import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { CrudPageComponent } from "./crud/crud-page/crud-page.component";
import { UserDetailComponent } from "./crud/user-detail/user-detail.component";
import { CreateUserComponent } from "./crud/create-user/create-user.component";
import { MoviePageComponent } from './movie/movie-page/movie-page.component';
import { WaetherPageComponent } from './weather/waether-page/waether-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrudPageComponent,
    UserDetailComponent,
    CreateUserComponent,
    MoviePageComponent,
    WaetherPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
