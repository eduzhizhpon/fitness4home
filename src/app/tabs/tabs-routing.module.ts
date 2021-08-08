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
        path: 'session-user',
        loadChildren: () => import('@social/sessions/sessions.module').then(m => m.SessionsPageModule)
      },
      {
        path: 'session-coach',
        loadChildren: () => import('@social/sessions-list-coach/sessions-list-coach.module').then(m => m.SessionsListCoachPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('@auth-app/home/home.module').then(m => m.HomePageModule)
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
        path: 'home/my-profile',
        loadChildren: () => import('@auth-app/my-profile/my-profile.module').then(m => m.MyProfilePageModule)
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
        path: 'settings/edit-profile',
        loadChildren: () => import('@auth-app/edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
      },


      {
        path: 'subscription/cancel',
        loadChildren: () => import('@subscription/cancel-subscription/cancel-subscription.module').then(m => m.CancelSubscriptionPageModule)
      },
      {
        path: 'session-user/new-sesion',
        loadChildren: () => import('@social/new-session/new-session.module').then(m => m.NewSessionPageModule)
      },
      {
        path: 'session-coach/start-sesion',
        loadChildren: () => import('@social/start-session-coach/start-session-coach.module').then(m => m.StartSessionCoachPageModule)
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
