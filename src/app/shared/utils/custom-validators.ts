import { FormControl } from '@angular/forms';

export interface ValidationResult {
  [key: string]: boolean;
}

export class CustomValidators {

  static containsValidNbSession(control: FormControl): ValidationResult {
    const regexNbSession = new RegExp(/^([1-7]|[12])$/g);
    if (!regexNbSession.test(control.value)) {
      return { invalidNbSession: true };
    }
  }
}
