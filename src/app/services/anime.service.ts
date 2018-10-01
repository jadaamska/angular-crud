import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(private http: HttpClient) {}
  getAnimeList() {
    return this.http.get(`${environment.apiUrl}/anime`);
  }
  // post
  addAnime(animeData) {
    return this.http.post(`${environment.apiUrl}/anime`, animeData);
  }
  // delete
  removeAnime(id) {
    return this.http.delete('https://first-project-d74d9.firebaseio.com/series/' + id + '.json');
  }
}