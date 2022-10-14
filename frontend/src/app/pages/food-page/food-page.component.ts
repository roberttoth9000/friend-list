import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FoodService } from 'src/app/core/services/food-service/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss'],
})
export class FoodPageComponent implements OnInit {
  addNewFoodForm = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  constructor(private foodService: FoodService) {}

  onSubmit(): void {
    if (this.addNewFoodForm.valid) {
      const newFood = this.addNewFoodForm.value;
      this.foodService.addFood(newFood);
    }
  }

  ngOnInit(): void {}
}
