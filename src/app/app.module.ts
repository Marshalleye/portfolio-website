import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanvaComponent } from './components/canva/canva.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { InfoComponent } from './components/info/info.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FacadeComponent } from './components/facade/facade.component';

@NgModule({
  declarations: [AppComponent, CanvaComponent, ProjectsComponent, InfoComponent, HomeComponent, HeaderComponent, FacadeComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, NoopAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
