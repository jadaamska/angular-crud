import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddAnimeComponent } from './add-anime/add-anime.component';
import { DisplayListComponent } from './display-list/display-list.component';
import { AnimeService } from './services/anime.service';
import { AngularFireModule } from 'angularfire2';
import { LoginComponent } from './auth/login/login.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddAnimeComponent,
    DisplayListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [AnimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
