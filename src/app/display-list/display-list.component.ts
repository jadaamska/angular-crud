import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {

  public series;
  constructor(private httpService: HttpService) {
    this.httpService.getAnimeList()
      .subscribe(
        (response) => {
          this.series = Object.values(response);
        }
      );
  }

  ngOnInit() {
  }

  deletePost(item) {
    this.httpService.removeAnime(item.name).subscribe(post => {
      console.log(item.name);
      console.log(post);
    });
  }

}
