import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'accueil',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'programme',
    loadChildren: './program/program.module#ProgramModule'
  },
  {
    path: 'objectif',
    loadChildren: './goal/goal.module#GoalModule'
  },
  {
    path: 'documentation',
    loadChildren: './documentation/documentation.module#DocumentationModule'
  },
  {
    path: 'subscription',
    loadChildren: './subscription/subscription.module#SubscriptionModule'
  },
  {
    path: 'sign-in',
    loadChildren: './sign-in/sign-in.module#SignInModule'
  },
  {
    path: 'profil',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
