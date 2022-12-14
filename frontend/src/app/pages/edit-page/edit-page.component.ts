import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { observable, Subscription } from 'rxjs';
import { IFood } from 'src/app/core/models/IFood';
import { IFriendDataApi } from 'src/app/core/models/IFriendDataApi';
import { IFriendViewModel } from 'src/app/core/models/IFriendViewModel';
import { INewFriendDataApi } from 'src/app/core/models/INewFriendDataApi';
import { INewFriendForm } from 'src/app/core/models/INewFriendForm';
import { FoodService } from 'src/app/core/services/food-service/food.service';
import { FriendService } from 'src/app/core/services/friend-service/friend.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss'],
})
export class EditPageComponent implements OnInit {
  editDeleteButtonShow: boolean = true;

  addNewFriendForm = new FormGroup({
    name: new FormControl('', Validators.minLength(4)),
    email: new FormControl('', [Validators.required, Validators.email]),
    comment: new FormControl('', Validators.maxLength(30)),
    favFood: new FormControl('', Validators.required),
    relationshipStatus: new FormControl('', Validators.required),
  });
  foodList: IFood[] = [];

  show: boolean = false;
  addFriend: string = 'Add new friend';

  toggle() {
    this.show = !this.show;

    if (this.show) this.addFriend = 'Hide';
    else this.addFriend = 'Add new friend';
  }

  addNewFoodForm = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  foodSubscription!: Subscription;
  friendSubscription!: Subscription;

  friendsList: IFriendViewModel[] = [];

  onSubmit() {
    const newFriendForm = this.addNewFriendForm.value;
    if (this.addNewFriendForm.valid) {
      const newFriendRequest: INewFriendDataApi = {
        name: newFriendForm.name,
        email: newFriendForm.email,
        comment: newFriendForm.comment,
        favFood: newFriendForm.favFood,
        relationshipStatus: Number(newFriendForm.relationshipStatus),
      };
      // console.log(newFriendRequest);
      this.friendService.addNewFriend(newFriendRequest);
    }
  }
  constructor(
    private friendService: FriendService,
    private foodService: FoodService
  ) {}

  ngOnInit(): void {
    this.foodService.getAllFood();
    this.foodSubscription = this.foodService.foodsObservable$.subscribe(
      (observableResponse: IFood[]) => {
        this.foodList = observableResponse;
      }
    );
    this.friendService.getAllFriends();
    this.friendSubscription = this.friendService.friendsObservable$.subscribe(
      (observableResponse: IFriendViewModel[]) => {
        this.friendsList = observableResponse;
      }
    );
  }
}
