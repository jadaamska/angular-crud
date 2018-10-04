import { Component, OnInit } from '@angular/core';
import {AnimeService} from '../services/anime.service';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {

  public series;
  fetchList() {
    this.animeService.getAnimeList()
      .subscribe(
        (response) => {
          this.series = Object.values(response);
        }
      );
  }
  constructor(private animeService: AnimeService) {
  }
  ngOnInit() {
    this.fetchList();
  }
  editPost(item) {
    this.animeService.removeAnime(item).subscribe(res => {
      console.log(res);
    });
  }
}
