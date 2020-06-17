import { CustomValidators } from '@shared/utils/custom-validators';
import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable()
export class ProgramService {


  constructor(private formBuilder: FormBuilder) { }

  initNbSessionForm(): FormGroup {
    return this.formBuilder.group({
      session: ['', [Validators.required, CustomValidators.containsValidNbSession]],
    });
  }
}


