import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodPageRoutingModule } from './food-page-routing.module';
import { FoodPageComponent } from './food-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FoodPageComponent],
  imports: [
    CommonModule,
    FoodPageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class FoodPageModule {}
