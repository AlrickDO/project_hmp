import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhoWeArePageRoutingModule } from './who-we-are-routing.module';

import { WhoWeArePage } from './who-we-are.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhoWeArePageRoutingModule
  ],
  declarations: [WhoWeArePage]
})
export class WhoWeArePageModule {}
