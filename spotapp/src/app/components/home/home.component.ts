import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading:boolean = true;
  nuevasCanciones: any[] = [];


  constructor(
        private spotify: SpotifyService, 
  ) { }

  ngOnInit(): void {
    this.spotify.getNewReleases().subscribe( (response:any) =>{
      this.nuevasCanciones = response;
      this.loading = false;
    });
    
  }




}