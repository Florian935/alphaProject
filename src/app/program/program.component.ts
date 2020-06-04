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

  constructor(private programService: ProgramService) { }

  ngOnInit() {
    this.nbSessionForm = this.programService.initNbSessionForm();
  }

  onSelectNbSession(): void {
    console.log(this.nbSessionForm.value);
  }
}
