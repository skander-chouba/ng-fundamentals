import { Component, OnInit, Input } from '@angular/core';
import { ISession } from '../../shared';
import { faFire } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {

  @Input() sessions: ISession[];
  fireIcon = faFire;

  constructor() { }

  ngOnInit(): void {
  }

}
