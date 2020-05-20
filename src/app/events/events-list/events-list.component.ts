import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { ToastrService } from 'src/app/common/toastr.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: any;
  constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(name: string){
    this.toastr.success(name);
  }
}
