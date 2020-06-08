import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { DetailComponent } from './detail/detail.component';
import { FavoriteComponent } from './favorite/favorite.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ListingComponent, pathMatch: 'full' },
      { path: 'favorite', component: FavoriteComponent },
      { path: ':id', component: DetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumsRoutingModule {}
