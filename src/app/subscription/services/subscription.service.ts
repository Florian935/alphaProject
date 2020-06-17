import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class SubscriptionService {

  constructor(private formBuilder: FormBuilder) { }

  initSubcriptionUserForm(): FormGroup {

    return this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      pseudo: ['', [Validators.required]],
    });
  }

}
