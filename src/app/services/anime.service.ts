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
  addAnime(animeData) {
    return this.http.post(`${environment.apiUrl}/anime`, animeData);
  }
  removeAnime(item) {
    return this.http.delete(`${environment.apiUrl}/anime/` + item._id);
  }
}
