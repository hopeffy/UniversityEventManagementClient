import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './pages/events/events/events.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { PersonComponent } from './pages/person/person/person.component';

const routes: Routes = [
  {
    path : '',
    component : DashboardComponent,
    
  },
  {
    path : 'events',
    component : EventsComponent
  },
  {
    path: 'person',
    component : PersonComponent
  }
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
