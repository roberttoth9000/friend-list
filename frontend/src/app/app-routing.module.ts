import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/landing-page/landing-page.module').then(
        (mod) => mod.LandingPageModule
      ),
  },
  {
    path: 'edit',
    loadChildren: () =>
      import('./pages/edit-page/edit-page.module').then(
        (mod) => mod.EditPageModule
      ),
  },
  {
    path: 'food',
    loadChildren: () =>
      import('./pages/food-page/food-page.module').then(
        (mod) => mod.FoodPageModule
      ),
  },
  {
    path: 'update',
    loadChildren: () =>
      import('./pages/update-friend-page/update-friend-page.module').then(
        (mod) => mod.UpdateFriendPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
