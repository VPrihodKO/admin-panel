import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PanelComponent } from './panel.component';
import { ProjectsComponent } from './projects.component';
import { SingleProjectComponent } from './single-project.component';

const routes: Routes = [
  { path: '', redirectTo: '/panel', pathMatch: 'full' },
  { path: 'panel', component: PanelComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'single-project', component: SingleProjectComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}