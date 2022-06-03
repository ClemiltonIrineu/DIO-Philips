import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './shared/components/pages/forms/user-form/user-form.component';
import { TodoListComponent } from './shared/components/pages/todo/todo-list/todo-list.component';
import { ListUsersComponent } from './shared/components/pages/users/list-users/list-users.component';

const routes: Routes = [
  {   path: '', component: ListUsersComponent },
  {   path: 'forms', component: UserFormComponent},
  {   path: 'forms/:id', component: UserFormComponent},
  {   path: 'todo', component: TodoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
