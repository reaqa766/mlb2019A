import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { InfogShowComponent } from './components/infographics/infog-show/infog-show.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    InfogShowComponent
  ],
  imports:[
 CommonModule,
NgtUniversalModule,
 
    
    AppRoutingModule
  ],
  providers: [],
})
export class AppModule { }
