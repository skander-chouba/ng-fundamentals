import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  isDirty = true;
  newEvent
  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit(): void {
  }

  cancel(): void{
    this.router.navigate(['/events']);
  }

  saveEvent(newEvent){
    this.eventService.saveEvent(newEvent);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

}
