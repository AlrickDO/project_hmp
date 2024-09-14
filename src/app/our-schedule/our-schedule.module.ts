import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurSchedulePageRoutingModule } from './our-schedule-routing.module';

import { OurSchedulePage } from './our-schedule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OurSchedulePageRoutingModule
  ],
  declarations: [OurSchedulePage]
})
export class OurSchedulePageModule {}
