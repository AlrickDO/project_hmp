import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurSchedulePage } from './our-schedule.page';

const routes: Routes = [
  {
    path: '',
    component: OurSchedulePage
  },
  {
    path: 'schedule-details/:index',
    loadChildren: () => import('./schedule-details/schedule-details.module').then( m => m.ScheduleDetailsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurSchedulePageRoutingModule {}
