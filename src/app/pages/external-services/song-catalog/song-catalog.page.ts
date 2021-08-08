import { Component, OnInit } from '@angular/core';
import { Song } from '../domain/song';
import { SongCatalogRestService } from '../services/song-catalog-rest.service';

@Component({
  selector: 'app-song-catalog',
  templateUrl: './song-catalog.page.html',
  styleUrls: ['./song-catalog.page.scss'],
})
export class SongCatalogPage implements OnInit {

  songList: Song[];
  word: string;
  loading: boolean;

  constructor(private songCatalogRestService: SongCatalogRestService) {
    this.loading = false;
   }

  ngOnInit() {
    this.loadDefault();
  }

  async loadDefault() {
    this.loading = true;
    this.songCatalogRestService.getDefaultSongList().subscribe((response) => {
      let songListResponse = response.response.hits;
      this.songList = this.filterSongs(songListResponse);
      this.loading = false;
    });
  }

  filterSongs(songListResponse: any): Song[] {
    let songList: Song[] = [];
    for (let s of songListResponse) {
      let song: Song = s.result;
      songList.push(song);
    }
    return songList;
  }

  async doRefresh(event) {
    this.songList = [];
    await this.loadDefault();

    event.target.complete();
  }

  onSearch(){
    if (this.word) {
      this.loading = true;
      this.songCatalogRestService.getSongListByFilter(this.word).subscribe( (response) => {
        let songListResponse = response.response.hits;
        this.songList = this.filterSongs(songListResponse);
        this.loading = false;
      });
    } else {
      this.loadDefault();
    }
  }

}
