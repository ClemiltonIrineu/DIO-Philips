import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/components/header/header.component';
import { ListUsersComponent } from './shared/components/pages/users/list-users/list-users.component';
import { UserFormComponent } from './shared/components/pages/forms/user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListUsersComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
