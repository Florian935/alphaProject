import { User } from './../core/models/user';
import { HttpService } from './../core/services/http.service';
import { ProgramService } from './services/program.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {

  nbSessionForm: FormGroup;
  user: User;

  constructor(private programService: ProgramService, private http: HttpService) { }

  ngOnInit() {
    this.nbSessionForm = this.programService.initNbSessionForm();
    this.http.getUser(1).subscribe(
      (user: User) => {
        console.log(user);
        this.user = user;
      });
  }

  onSelectNbSession(): void {
    console.log(this.nbSessionForm.value);
  }
}
