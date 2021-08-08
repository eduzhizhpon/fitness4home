import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../domain/song';

@Injectable({
  providedIn: 'root'
})
export class SongCatalogRestService {

  url: string;
  token: string;

  constructor(private http: HttpClient) { 
    this.url = 'https://api.genius.com';
    this.token = 'access_token=ckLG2fcgFvLvifsUfdMQbe38qvLnoxQEtoI5rpO_An34EzgcyxuW96NxycTwCFLw';
  }

  getDefaultSongList(): Observable<any> {
    let fullUrl: string = this.url + '/search?' + this.token;
    return this.http.get<Song[]>(fullUrl + '&q=training');
  }

  getSongListByFilter(word: string): Observable<any> {
    let fullUrl: string = this.url + '/search?' + this.token;
    return this.http.get<Song[]>(fullUrl + '&q=' + word);
  }
}
