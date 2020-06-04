import { AutomaticProgramComponent } from './automatic-program/automatic-program.component';
import { CustomProgramComponent } from './custom-program/custom-program.component';
import { ProgramComponent } from './program.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ProgramComponent,
    children: [
      {
        path: 'personnel',
        component: CustomProgramComponent
      },
      {
        path: 'automatique',
        component: AutomaticProgramComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramRoutingModule { }
