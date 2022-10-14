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
  friendSubscription!: Subscription;
  editDeleteButtonShow: boolean = false;

  friendsList: IFriendViewModel[] = [
    // {
    //   id: 1,
    //   name: 'Sanyi',
    //   email: 'test1@gmail.com',
    //   comment: 'Az első teszt komment',
    //   favFoodname: 'lasagne',
    //   relationshipStatus: 2,
    // },
    // {
    //   id: 2,
    //   name: 'Éva',
    //   email: 'test2@gmail.com',
    //   comment: 'A második teszt komment',
    //   favFoodname: 'sültcsirke',
    //   relationshipStatus: 2,
    // },
    // {
    //   id: 1,
    //   name: 'Barnabás',
    //   email: 'barnabas42@gmail.com',
    //   comment: 'Itt van még egy teszt komment',
    //   favFoodname: 'nincs',
    //   relationshipStatus: 0,
    // },
  ];

  constructor(private friendService: FriendService) {}

  ngOnInit(): void {
    this.editDeleteButtonShow = false;
    this.friendService.getAllFriends();
    this.friendSubscription = this.friendService.friendsObservable$.subscribe(
      (observableResponse: IFriendViewModel[]) => {
        this.friendsList = observableResponse;
      }
    );
  }
}
