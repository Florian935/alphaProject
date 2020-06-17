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

  constructor(private programService: ProgramService, private http: HttpService) { }

  ngOnInit() {
    this.nbSessionForm = this.programService.initNbSessionForm();
    this.http.testApi().subscribe(
      (value) => console.log(value)
      );
  }

  onSelectNbSession(): void {
    console.log(this.nbSessionForm.value);
  }
}
