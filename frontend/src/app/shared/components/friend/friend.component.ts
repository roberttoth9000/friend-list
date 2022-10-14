import { Component, Input } from '@angular/core';
import { IFriendViewModel } from 'src/app/core/models/IFriendViewModel';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss'],
})
export class FriendComponent {
  @Input() friendData!: IFriendViewModel;
  @Input() editDeleteButtonShow: boolean = true;
}
