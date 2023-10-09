import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';

export const FULL_ROUTES: Routes = [
  {
    path: 'login',
    loadChildren: () => import('../app/pages/home/home.module').then(m => m.HomeModule)
  },
];


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AppComponent,
    /** data: {title: 'etc'} */
    children: FULL_ROUTES
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'corrected' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
 