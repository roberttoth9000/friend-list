import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RelationshipStatus } from 'src/app/core/models/enums/relationshipStatusType';
import { IFriendDataApi } from 'src/app/core/models/IFriendDataApi';
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
  RelationshipStatusEnum = RelationshipStatus;

  constructor(private friendService: FriendService) {}

  deleteFriend(id: number): void {
    this.friendService.deleteFriendById(id);
  }

  getFriendId(id: number): void {
    this.friendService.getFriendById(id);
  }
}
