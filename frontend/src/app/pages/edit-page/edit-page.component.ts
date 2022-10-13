import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { INewFriendForm } from 'src/app/core/models/INewFriendForm';
import { FriendService } from 'src/app/core/services/friend-service/friend.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss'],
})
export class EditPageComponent implements OnInit {
  addNewFriendForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    comment: new FormControl(''),
    favFood: new FormControl('', Validators.required),
    relationshipStatus: new FormControl('', Validators.required),
  });

  onSubmit() {
    const newFriendForm: INewFriendForm = this.addNewFriendForm.value;
    if (this.addNewFriendForm.valid) {
      this.friendService.addNewFriend(newFriendForm);
    }
  }
  constructor(private friendService: FriendService) {}

  ngOnInit(): void {}
}
