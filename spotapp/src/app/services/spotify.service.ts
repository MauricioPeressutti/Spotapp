import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient,
  ) { }


  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAQOq3svazwES9wrBHAQICfsfZVMuc7_QsLOttDlwYWME7uaMPkSBPybLXlWibu6zmNf2Yp1wSmk_2D3H8'
    });

    return this.http.get(url, { headers });
  }


  getNewReleases() {

    return this.getQuery('browse/new-releases')
      .pipe(map((data: any) => {
        return data.albums.items;
      }));
  }

  getArtistas(termino: string) {


    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map((data: any) => {
        return data.artists.items;
      }));
  }



  getArtista(id: string) {


    return this.getQuery(`artists/${id}`)
    // .pipe(map((data:any)=>{
    //   return data.artists.items;
    // }));
  }


  getTopTracks(id: string) {


    return this.getQuery(`artists/${id}/top-tracks`)

  }

}


// https://api.spotify.com/v1/artists/{id}