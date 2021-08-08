
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../domain/song';
import { SongCatalogRestService } from './song-catalog-rest.service';

@Injectable({
  providedIn: 'root'
})
export class SongCatalogService {

  songList: Song[];

  constructor(private songCatalogRestService: SongCatalogRestService) {
    
  }

  setSongList(songList: Song[]): void {
    this.songList = songList;
  }

  getDefaultSongList(): Observable<Song[]> {
    return this.songCatalogRestService.getDefaultSongList();
  }

  getSongListByFilter(word: string): Observable<Song[]>  {
    return this.songCatalogRestService.getSongListByFilter(word);
  }
}
