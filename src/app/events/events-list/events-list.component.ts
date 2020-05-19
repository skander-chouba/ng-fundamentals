import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { ToastrService } from 'src/app/common/toastr.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: any[];
  constructor(private eventService: EventService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(name: string){
    this.toastr.success(name);
  }
}
