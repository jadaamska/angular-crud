import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-add-anime',
  templateUrl: './add-anime.component.html',
  styleUrls: ['./add-anime.component.css']
})

export class AddAnimeComponent implements OnInit {

  animeTitle = '';
  animeAuthor = '';
  element;
  constructor(private httpService: HttpService) { }
  ngOnInit() {
  }

  saveTitle(event) {
    this.animeTitle = event.target.value;
  }

  saveAuthor(event) {
    this.animeAuthor = event.target.value;
  }

  addPost() {
       this.element = ({
       title: this.animeTitle,
       author: this.animeAuthor,
       rating: 1,
       });
    this.httpService.addAnime(this.element).subscribe(post => {
      console.log(post);
    });
  }

}
