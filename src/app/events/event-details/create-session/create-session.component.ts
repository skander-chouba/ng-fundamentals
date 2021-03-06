import { Component, OnInit, Output } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ISession } from '../../shared';
import { restrictedWords } from '../../shared/custom-validators';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;
  @Output() saveNewSession = new EventEmitter();
  @Output() cancelNewSession = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar'])]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }

  saveSession(formValues): void{

      let session: ISession = {
        id: undefined,
        name: formValues.name,
        presenter: formValues.presenter,
        duration: +formValues.duration,
        level: formValues.level,
        abstract: formValues.abstract,
        voters: []
      }
      this.saveNewSession.emit(session);
  }
  clickCancel(){
    this.cancelNewSession.emit();
  }
}
