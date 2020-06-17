import { ProgramService } from './services/program.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip'

import { ProgramRoutingModule } from './program-routing.module';
import { CustomProgramComponent } from './custom-program/custom-program.component';
import { AutomaticProgramComponent } from './automatic-program/automatic-program.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgramComponent } from './program.component';

@NgModule({
  declarations: [
    ProgramComponent,
    CustomProgramComponent,
    AutomaticProgramComponent
  ],
  imports: [
    CommonModule,
    ProgramRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule
  ],
  providers: [
    ProgramService
  ]
})
export class ProgramModule { }
