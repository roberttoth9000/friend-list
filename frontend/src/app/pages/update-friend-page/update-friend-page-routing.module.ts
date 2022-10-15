import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateFriendPageComponent } from './update-friend-page.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateFriendPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateFriendPageRoutingModule {}
