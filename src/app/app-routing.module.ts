import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'what-we-play',
    pathMatch: 'full'
  },
  {
    path: 'who-we-are',
    loadChildren: () => import('./who-we-are/who-we-are.module').then( m => m.WhoWeArePageModule)
  },
  {
    path: 'what-we-play',
    loadChildren: () => import('./what-we-play/what-we-play.module').then( m => m.WhatWePlayPageModule)
  },
  {
    path: 'our-schedule',
    loadChildren: () => import('./our-schedule/our-schedule.module').then( m => m.OurSchedulePageModule)
  },
  {
    path: 'achievement/:index',
    loadChildren: () => import('./achievement/achievement.module').then( m => m.AchievementPageModule)
  },
  {
    path: 'teams/:index',
    loadChildren: () => import('./teams/teams.module').then( m => m.TeamsPageModule)
  },
  {
    path: 'apply-team',
    loadChildren: () => import('./apply-team/apply-team.module').then( m => m.ApplyTeamPageModule)
  },
  {
    path: 'apply-team-new',
    loadChildren: () => import('./apply-team-new/apply-team-new.module').then( m => m.ApplyTeamNewPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
