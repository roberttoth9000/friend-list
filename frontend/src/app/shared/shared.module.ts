import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FriendComponent } from './components/friend/friend.component';

@NgModule({
  declarations: [HeaderComponent, FriendComponent],
  imports: [CommonModule, RouterModule],
  providers: [],
  exports: [HeaderComponent],
})
export class SharedModule {}
