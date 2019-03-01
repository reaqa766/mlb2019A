import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from '../app/components/home/home.component';

import { InfogShowComponent } from './components/infographics/infog-show/infog-show.component';
import { TriviaComponent } from './components/trivia/trivia.component';

// import {AuthComponent} from '../app/components/auth/auth/auth.component';


const routes: Routes = [
    { path: '',
    component: HomeComponent},
    { path: 'infog_Show',
    component: InfogShowComponent},
    { path: 'trivia',
  component: TriviaComponent}
];

// const appRoutes: Routes = [
//   {
//     path: 'auth',
//     children: [
//       { path: 'login', component: AuthComponent},
//       { path: 'logout', component: AuthComponent}
//     ]
//   },
//   {
//     path: '',
//     loadChildren: 'app/modules/reader/reader.module#ReaderModule'
//   },
//   {
//     path: 'editor',
//     canActivateChild: [EditorAuthGuard],
//     loadChildren: 'app/modules/editor/editor.module#EditorModule'
//   },
//   { path: '**', component: NotFoundPageComponent }
// ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
