import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';
import { PanelComponent } from './panel.component';
import { ProjectsComponent } from './projects.component';
import { SingleProjectComponent } from './single-project.component';




@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    PanelComponent,
    SingleProjectComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
