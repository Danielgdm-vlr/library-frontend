import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    ComponentsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [HeaderComponent]
})
export class AppModule { }
