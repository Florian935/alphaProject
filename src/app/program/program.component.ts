import { User } from '@core/models/user';
import { HttpService } from '@core/services/http.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProgramService } from './services/program.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {

  nbSessionForm: FormGroup;
  user: User;

  constructor(private _programService: ProgramService, private _httpService: HttpService) { }

  ngOnInit() {
    this.nbSessionForm = this._programService.initNbSessionForm();
    this._httpService.getUser(1).subscribe(
      (user: User) => {
        console.log(user);
        this.user = user;
      });
  }

  onSelectNbSession(): void {
    console.log(this.nbSessionForm.value);
  }
}
