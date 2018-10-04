import {Component, EventEmitter, Output, OnInit} from '@angular/core';
import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'app-add-anime',
  templateUrl: './add-anime.component.html',
  styleUrls: ['./add-anime.component.css']
})

export class AddAnimeComponent implements OnInit {

  animeTitle = '';
  animeAuthor = '';
  score = 0;
  starArray = [1, 2, 3, 4, 5];
  element;
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();
  constructor(private animeService: AnimeService) { }
  ngOnInit() {
  }
  saveScore(rating) {
    if (this.score === rating) {
      this.score = 0;
    } else {
      this.score = rating;
    }
  }
  getColor(i): string {
    if (i + 1 <= this.score) {
      return 'white';
    } else {
      return '#808080';
    }
  }
  addPost() {
    this.element = ({
      title: this.animeTitle,
      author: this.animeAuthor,
      score: this.score,
    });
    this.animeService.addAnime(this.element)
      .subscribe(data => {
        console.log(data);
        this.notifyParent.emit();
      });
  }
}
