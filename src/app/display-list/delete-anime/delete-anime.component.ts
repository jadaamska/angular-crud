import {Component, EventEmitter, Output, OnInit, Input} from '@angular/core';
import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'app-delete-anime',
  templateUrl: './delete-anime.component.html',
  styleUrls: ['./delete-anime.component.css']
})

export class DeleteAnimeComponent implements OnInit {
  @Input() item;
  @Output() funcToParent: EventEmitter<any> = new EventEmitter();
  constructor(private animeService: AnimeService) { }
  ngOnInit() {
  }
  deletePost() {
    this.animeService.removeAnime(this.item)
      .subscribe(element => {
        console.log(element);
      });
    this.funcToParent.emit();
  }
}
