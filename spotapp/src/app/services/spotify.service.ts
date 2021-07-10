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
   ) {}


    getQuery(query: string){
      const url = `https://api.spotify.com/v1/${ query }`;

      const headers = new HttpHeaders({
        'Authorization': 'Bearer BQCgVskSJJW5VtOSaDu2TCJe031kA7EjURHKd2higxyrwOA37qQZhIPPyvfb0Njx208l0nTaNn1AyiKLbzc'
      });

      return this.http.get(url , {headers});
    }


   getNewReleases(){

    return this.getQuery('browse/new-releases')
              .pipe(map((data:any) =>{
                return data.albums.items;
              }));
   }

   getArtista( termino: string ){


    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                .pipe(map((data:any)=>{
                  return data.artists.items;
                }));
   }

}
