import { Component, OnInit } from '@angular/core';
import {AnimeService} from '../services/anime.service';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {

  public series;
  constructor(private animeService: AnimeService) {
    this.animeService.getAnimeList()
      .subscribe(
        (response) => {
          this.series = Object.values(response);
        }
      );
  }

  ngOnInit() {
  }

  deletePost(item) {
    this.animeService.removeAnime(item.name).subscribe(post => {
      console.log(item.name);
      console.log(post);
    });
  }

}
