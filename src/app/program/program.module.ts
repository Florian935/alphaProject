import { MatButtonModule } from '@angular/material/button';
import { GoalComponent } from './../goal/goal.component';
import { ProgramComponent } from './program.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramRoutingModule } from './program-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { CustomProgramComponent } from './custom-program/custom-program.component';
import { AutomaticProgramComponent } from './automatic-program/automatic-program.component';

@NgModule({
  declarations: [
    ProgramComponent,
    GoalComponent,
    CustomProgramComponent,
    AutomaticProgramComponent
  ],
  imports: [
    CommonModule,
    ProgramRoutingModule,
    MatTabsModule,
    MatButtonModule
  ]
})
export class ProgramModule { }
