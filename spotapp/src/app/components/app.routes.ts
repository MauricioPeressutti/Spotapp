import { Routes } from '@angular/router'
import { ArtistaComponent } from './artista/artista.component'
import { HomeComponent } from './home/home.component'
import { SearchComponent } from './search/search.component'


export const ROUTES: Routes = [
    { path: 'home' , component: HomeComponent},
    { path: 'search' , component: SearchComponent},
    { path: 'artist/:id' , component: ArtistaComponent},
    { path: '' , pathMatch: 'full' , redirectTo: 'home'},
    { path: '**' , pathMatch: 'full' , redirectTo: 'home'},
    
]