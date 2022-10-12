import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IFriendViewModel } from 'src/app/core/models/IFriendViewModel';
import { FriendService } from 'src/app/core/services/friend-service/friend.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  friendData!: IFriendViewModel;
  friendSubscription!: Subscription;

  friends: IFriendViewModel[] = [];

  constructor(private friendService: FriendService) {}

  ngOnInit(): void {
    this.friendService.getAllFriends();
    this.friendSubscription = this.friendService.friendsObservable$.subscribe(
      (observableResponse: IFriendViewModel[]) => {
        this.friends = observableResponse;
      }
    );
  }
}
