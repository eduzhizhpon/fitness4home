import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'auth/login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'auth/register',
    loadChildren: () => import('./pages/auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'auth/complete-profile',
    loadChildren: () => import('./pages/auth/complete-profile/complete-profile.module').then( m => m.CompleteProfilePageModule)
  },
  {
    path: 'subscription',
    loadChildren: () => import('@subscription/subscription/subscription.module').then( m => m.SubscriptionPageModule)
  },
  {
    path: 'admin/coach',
    loadChildren: () => import('./pages/social/admin-coach/admin-coach.module').then( m => m.AdminCoachPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
