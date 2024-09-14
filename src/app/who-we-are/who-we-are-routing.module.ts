import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhoWeArePage } from './who-we-are.page';

const routes: Routes = [
  {
    path: '',
    component: WhoWeArePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhoWeArePageRoutingModule {}
