import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from 'src/app/events/shared/event.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsListResolverService implements Resolve<any>{

  constructor(private eventService: EventService) { }

  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot) {
    return this.eventService.getEvents().pipe(map(events => events))
  }
}
