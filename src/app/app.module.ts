import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { InfogShowComponent } from './components/infographics/infog-show/infog-show.component';
import { HeaderComponent } from './components/header/header.component';
import { TriviaComponent } from './components/trivia/trivia.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    InfogShowComponent,
    HeaderComponent,
    TriviaComponent
  ],
  imports:[
  CommonModule,
  NgtUniversalModule,
  HttpClientModule,
  FormsModule,
  AppRoutingModule
  ],
  providers: [],
})
export class AppModule { }
