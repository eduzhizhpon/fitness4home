import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'subscription-update',
        children: [
          {
            path: '',
            loadChildren: () => import('@subscription/update-subscription/update-subscription.module')
              .then(m => m.UpdateSubscriptionPageModule)
          },
          {
            path: 'cancel',
            loadChildren: () => import('@subscription/cancel-subscription/cancel-subscription.module')
              .then(m => m.CancelSubscriptionPageModule)
          },
        ]
      },
      {
        path: 'session-user',
        loadChildren: () => import('@social/sessions/sessions.module').then(m => m.SessionsPageModule)
      },
      {
        path: 'session-coach',
        loadChildren: () => import('@social/sessions-list-coach/sessions-list-coach.module').then(m => m.SessionsListCoachPageModule)
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('@auth-app/home/home.module').then(m => m.HomePageModule)
          },
          {
            path: 'my-profile',
            loadChildren: () => import('@auth-app/my-profile/my-profile.module').then(m => m.MyProfilePageModule)
          },
        ]
      },
      {
        path: 'music',
        loadChildren: () => import('@external-services/song-catalog/song-catalog.module').then(m => m.SongCatalogPageModule)
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: () => import('@auth-app/settings/settings.module').then(m => m.SettingsPageModule)
          },
          {
            path: 'edit-profile',
            loadChildren: () => import('@auth-app/edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
          },
        ]

      },


      {
        path: 'home/states',
        loadChildren: () => import('@social/states/states.module').then(m => m.StatesPageModule)
      },
      {
        path: 'home/states/new-state',
        loadChildren: () => import('@social/new-state/new-state.module').then(m => m.NewStatePageModule)
      },
      {
        path: 'home/session-pending',
        loadChildren: () => import('@social/sessions-coach/sessions-coach.module').then(m => m.SessionsCoachPageModule)
      },


      {
        path: 'session-user/new-sesion',
        loadChildren: () => import('@social/new-session/new-session.module').then(m => m.NewSessionPageModule)
      },
      {
        path: 'session-coach/start-session',
        loadChildren: () => import('@social/start-session-coach/start-session-coach.module').then(m => m.StartSessionCoachPageModule)
      },
      {
        path: 'session-coach/start-session',
        loadChildren: () => import('@social/start-session-coach/start-session-coach.module').then(m => m.StartSessionCoachPageModule)
      },


      {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
