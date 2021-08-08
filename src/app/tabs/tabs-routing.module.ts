import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'subscription',
        loadChildren: () => import('@subscription/update-subscription/update-subscription.module').then(m => m.UpdateSubscriptionPageModule)
      },
      {
        path: 'session',
        loadChildren: () => import('@external-services/zoom-meeting/zoom-meeting.module').then(m => m.ZoomMeetingPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'music',
        loadChildren: () => import('@external-services/song-catalog/song-catalog.module').then(m => m.SongCatalogPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },

      {
        path: 'auth/my-profile',
        loadChildren: () => import('@auth-app/my-profile/my-profile.module').then(m => m.MyProfilePageModule)
      },
      {
        path: 'settings/edit-profile',
        loadChildren: () => import('@auth-app/edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
      },
      {
        path: 'subscription/cancel',
        loadChildren: () => import('@subscription/cancel-subscription/cancel-subscription.module').then(m => m.CancelSubscriptionPageModule)
      },
      {
        path: '',
        redirectTo: '/subscription',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/subscription',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
