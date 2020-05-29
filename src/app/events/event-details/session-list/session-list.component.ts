import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ISession } from '../../shared';
import { faFire } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnChanges {

  @Input() sessions: ISession[];
  fireIcon = faFire;
  visibleSessions: ISession[] = [];
  @Input() filterBy: string;
  @Input() sortBy: string;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  filterSessions(filterBy: string): void{
    if (filterBy === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    }
    else{
      this.visibleSessions = this.sessions.filter(x =>{
        return x.level.toLowerCase() === filterBy
      } );
    }
  }
}

function sortByNameAsc(s1:ISession, s2: ISession) {
  if (s1.name > s2.name) return 1;
  else if(s1.name === s2.name)  return 0;
  else return -1;
}

function sortByVotesDesc(s1:ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}
