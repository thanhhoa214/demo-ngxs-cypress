import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { ListingComponent } from './listing/listing.component';
import { DetailComponent } from './detail/detail.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ListingComponent, DetailComponent, FavoriteComponent],
  imports: [CommonModule, IonicModule, AlbumsRoutingModule],
})
export class AlbumsModule {}
