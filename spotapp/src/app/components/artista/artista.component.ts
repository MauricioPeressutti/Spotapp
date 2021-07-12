import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  loading: boolean = true;
  artista: any = {};
  topTracks: any;
  

  constructor( private router: ActivatedRoute,
              private spotify: SpotifyService,
     ) { 

      this.router.params.subscribe( (response:any) => {
        this.getArtista( response['id'] );
        this.getTopTrack( response['id'] );
      })

     }

  ngOnInit(): void {
  }


  getArtista( id: string ){
    this.spotify.getArtista(id).subscribe( (response: any) => {
      this.artista = response;
      this.loading = false;
    });
  }

  getTopTrack( id: string ){
    this.spotify.getArtista(id).subscribe( (response: any) => {
      this.topTracks = response;
    });
  }

}
