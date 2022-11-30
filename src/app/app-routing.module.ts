import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedGuard } from './core/guards/is-logged.guard';
import { IndexComponent } from './layout/index/index.component';
import { LoginComponent } from './login/login.component';
import { PagesRoutes } from './routes';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [IsLoggedGuard] },
  {
    path: '',
    component: IndexComponent,
    canActivate: [IsLoggedGuard],
  },
  {
    path: '',
    canActivate: [IsLoggedGuard],
    children: PagesRoutes,
  },
  // { path: '', children: pagesRoutes, canActivate: [IsLoggedGuard] },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
