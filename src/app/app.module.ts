import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { EventDetailsComponent } from './events/event-details/event-details/event-details.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent){
  if(component.isDirty)
    return window.confirm('You have not saved thi event, do you really want to cancel?')
  return true;
}
