import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhatWePlayPageRoutingModule } from './what-we-play-routing.module';

import { WhatWePlayPage } from './what-we-play.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhatWePlayPageRoutingModule
  ],
  declarations: [WhatWePlayPage]
})
export class WhatWePlayPageModule {}
