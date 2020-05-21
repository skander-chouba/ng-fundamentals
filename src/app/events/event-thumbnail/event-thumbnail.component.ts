import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from '../shared';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: IEvent;
  @Output() eventClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  getStartTimeClass(){
    //Method1
    // const isEarlyStart = this.event?.time === '8:00 am';
    // return {green: isEarlyStart, bold: isEarlyStart};

    //Method2
    // if(this.event && this.event.time === '8:00 am')
    //   return 'green bold';
    // return '';

    //Method3
    if(this.event && this.event.time === '8:00 am')
      return ['green', 'bold'];
    return [];
  }
}
