import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/new', component: CreateEventComponent },
  { path: 'events/:id', component: EventDetailsComponent },
  { path: '404', component: NotFoundComponent },
  { path: '', pathMatch: 'full', redirectTo: '/events' }
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}
