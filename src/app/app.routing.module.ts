import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {LoggedUserComponent} from './logged-user/logged-user.component';

const AppRoutes: Routes = [
  {
    path: 'start',
    component: LoginComponent
  },
  {
    path: 'zalogowany',
    component: LoggedUserComponent
  },
  {
    path: 'register',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
