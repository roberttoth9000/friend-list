import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss'],
})
export class EditPageComponent implements OnInit {
  addNewFriendForm = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  onSubmit() {
    console.log(this.addNewFriendForm.value);
  }
  constructor() {}

  ngOnInit(): void {}
}
