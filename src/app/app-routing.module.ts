import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { Item1Component } from './pages/item1/item1.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { path : 'home', component : PortafolioComponent },
  { path : 'about', component : AboutComponent },
  { path : 'item1/:id', component : Item1Component},
  { path: 'search/:termino', component: SearchComponent },
  { path : '**', pathMatch : 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [ RouterModule.forRoot( routes, { useHash : true } ) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
