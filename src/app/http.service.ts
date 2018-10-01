import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  // get
  getAnimeList() {
    return this.http.get('https://first-project-d74d9.firebaseio.com/series.json');
  }
  // post
  addAnime(x) {
    return this.http.post('https://first-project-d74d9.firebaseio.com/series.json', x);
  }
  // delete
  removeAnime(id) {
    return this.http.delete('https://first-project-d74d9.firebaseio.com/series/' + id + '.json');
  }
  editAnime() {
  }
}
