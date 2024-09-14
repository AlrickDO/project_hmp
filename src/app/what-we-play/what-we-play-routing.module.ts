import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatWePlayPage } from './what-we-play.page';

const routes: Routes = [
  {
    path: '',
    component: WhatWePlayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhatWePlayPageRoutingModule {}
