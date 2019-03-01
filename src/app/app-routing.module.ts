import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from '../app/components/home/home.component';

import { InfogShowComponent } from './components/infographics/infog-show/infog-show.component';


const routes: Routes = [
    { path: '',
    component: HomeComponent},
    { path: 'infog_Show',
    component: InfogShowComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
