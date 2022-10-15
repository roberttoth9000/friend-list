import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { observable, Subscription } from 'rxjs';
import { IFood } from 'src/app/core/models/IFood';
import { IFriendDataApi } from 'src/app/core/models/IFriendDataApi';
import { FoodService } from 'src/app/core/services/food-service/food.service';
import { FriendService } from 'src/app/core/services/friend-service/friend.service';
import { FriendComponent } from 'src/app/shared/components/friend/friend.component';

@Component({
  selector: 'app-update-friend-page',
  templateUrl: './update-friend-page.component.html',
  styleUrls: ['./update-friend-page.component.scss'],
})
export class UpdateFriendPageComponent implements OnInit {
  friendSubscription!: Subscription;
  friend!: IFriendDataApi;
  foodSubscription!: Subscription;

  updateFriendForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    comment: new FormControl(''),
    favFood: new FormControl('', Validators.required),
    relationshipStatus: new FormControl('', Validators.required),
  });
  foodList: IFood[] = [];

  constructor(
    private friendService: FriendService,
    private foodService: FoodService
  ) {}

  updateFriend(): void {
    const updateFriendForm = this.updateFriendForm.value;
    if (this.updateFriendForm.valid) {
      const sendUpdateData: IFriendDataApi = {
        id: updateFriendForm.id,
        name: updateFriendForm.name,
        email: updateFriendForm.email,
        comment: updateFriendForm.comment,
        favFood: updateFriendForm.favFood,
        relationshipStatus: Number(updateFriendForm.relationshipStatus),
      };
      this.friendService.updateFriend(sendUpdateData);
    }
  }

  ngOnInit(): void {
    this.friendSubscription =
      this.friendService.oneFriendsObservable$.subscribe(
        (observableResponse: IFriendDataApi) => {
          this.friend = observableResponse;
          this.updateFriendForm.patchValue({
            id: this.friend.id,
            name: this.friend.name,
            email: this.friend.email,
            comment: this.friend.comment,
            relationshipStatus: this.friend.relationshipStatus,
          });
        }
      );
    this.foodService.getAllFood();
    this.foodSubscription = this.foodService.foodsObservable$.subscribe(
      (observableResponse: IFood[]) => {
        this.foodList = observableResponse;
      }
    );
  }
}
