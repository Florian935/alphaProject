import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomValidatorsPipe } from './pipes/custom-validators.pipe';



@NgModule({
  declarations: [CustomValidatorsPipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
