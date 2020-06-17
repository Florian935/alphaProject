import { FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class SignInService {

  constructor(private formBuilder: FormBuilder) { }

  initSignInForm() {
    return this.formBuilder.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
}
