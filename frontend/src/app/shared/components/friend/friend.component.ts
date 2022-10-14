import { Component, Input } from '@angular/core';
import { IFriendViewModel } from 'src/app/core/models/IFriendViewModel';
import { FriendService } from 'src/app/core/services/friend-service/friend.service';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss'],
})
export class FriendComponent {
  @Input() friendData!: IFriendViewModel;
  @Input() editDeleteButtonShow: boolean = true;

  constructor(private friendService: FriendService) {}

  deleteFriend(id: number): void {
    this.friendService.deleteFriendById(id);
  }
}
