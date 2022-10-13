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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
