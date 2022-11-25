import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedGuard } from './core/guards/is-logged.guard';
import { IndexComponent } from './layout/index/index.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'home', component: IndexComponent, canActivate: [IsLoggedGuard] },
  { path: 'login', component: LoginComponent, canActivate: [IsLoggedGuard] },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
