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

  constructor(private songCatalogRestService: SongCatalogRestService) { }

  ngOnInit() {
    this.songCatalogRestService.getDefaultSongList().subscribe( (response) => {
      let songListResponse = response.response.hits;
      this.songList = this.filterSongs(songListResponse);
      
      console.log('Canciones', this.songList);
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

}
