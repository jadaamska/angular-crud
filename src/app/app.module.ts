import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddAnimeComponent } from './display-list/add-anime/add-anime.component';
import { DisplayListComponent } from './display-list/display-list.component';
import { AnimeService } from './services/anime.service';
import { AngularFireModule } from 'angularfire2';
import { LoginComponent } from './auth/login/login.component';
import { environment } from '../environments/environment';
import {LoggedUserComponent} from './logged-user/logged-user.component';
import {AppRoutingModule} from './app.routing.module';
import {DeleteAnimeComponent} from './display-list/delete-anime/delete-anime.component';
import {RegisterComponent} from './auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddAnimeComponent,
    DisplayListComponent,
    LoginComponent,
    LoggedUserComponent,
    DeleteAnimeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule
  ],
  providers: [AnimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
