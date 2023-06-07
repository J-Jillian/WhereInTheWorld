import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VisitedComponent } from './components/visited/visited.component';
import { WishListComponent } from './components/wish-list/wish-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'visited',
    component: VisitedComponent,
  },
  {
    path: 'wishlist',
    component: WishListComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
