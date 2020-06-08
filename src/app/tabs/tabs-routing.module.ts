import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const lazyLoadListing = () =>
  import('../albums/albums.module').then((m) => m.AlbumsModule);

const routes: Routes = [
  {
    path: 'app',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: 'albums',
        pathMatch: 'full',
      },
      {
        path: 'albums',
        loadChildren: lazyLoadListing,
      },
      {
        path: 'favorite',
        loadChildren: lazyLoadListing,
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../profile/profile.module').then((m) => m.ProfileModule),
      },
      {
        path: '',
        redirectTo: 'albums',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
