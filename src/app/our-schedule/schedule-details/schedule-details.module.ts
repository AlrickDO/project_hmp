import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScheduleDetailsPageRoutingModule } from './schedule-details-routing.module';

import { ScheduleDetailsPage } from './schedule-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScheduleDetailsPageRoutingModule
  ],
  declarations: [ScheduleDetailsPage]
})
export class ScheduleDetailsPageModule {}
