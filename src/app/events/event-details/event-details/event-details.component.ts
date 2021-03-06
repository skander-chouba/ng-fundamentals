import { Component, OnInit } from '@angular/core';
import { EventService } from '../../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../../shared';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy = 'all';
  sortBy = 'votes';
  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    this.route.params.forEach((params: Params) => {
        this.event = this.eventService.getEvent(+params['id']);
        this.addMode = false;
    });
  }

  addSession():void{
    this.addMode = true;
  }

  saveNewSession(session: ISession):void{
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }
  cancelAddingSession(): void{
    this.addMode = false;
  }
}
