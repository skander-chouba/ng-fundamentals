import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';
import { ISession, EventService } from 'src/app/events';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchTerm: string;
  foundSessions: ISession[];
  constructor(public authService: AuthService, private eventService: EventService) { }

  ngOnInit(): void {
  }
  searchSessions(searchTerm: string){
    this.eventService.getSessionsBySearchTerm(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
    });
  }
}
