import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateFriendPageRoutingModule } from './update-friend-page-routing.module';
import { UpdateFriendPageComponent } from './update-friend-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UpdateFriendPageComponent],
  imports: [
    CommonModule,
    UpdateFriendPageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class UpdateFriendPageModule {}
