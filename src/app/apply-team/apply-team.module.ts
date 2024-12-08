import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplyTeamPageRoutingModule } from './apply-team-routing.module';

import { ApplyTeamPage } from './apply-team.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplyTeamPageRoutingModule
  ],
  declarations: [ApplyTeamPage]
})
export class ApplyTeamPageModule {}
