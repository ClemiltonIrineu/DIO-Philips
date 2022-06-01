import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './shared/components/pages/forms/user-form/user-form.component';
import { ListUsersComponent } from './shared/components/pages/users/list-users/list-users.component';

const routes: Routes = [
  {
    path: '', component: ListUsersComponent 
  },
  {
    path: 'forms', component: UserFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
