import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PeopleService } from './shared/service/people.service';
import { ListPeopleComponent } from './shared/components/list-people/list-people.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListService } from './shared/service/list.service';
import { ListApiComponent } from './shared/components/list-app/list-api.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPeopleComponent,
    ListApiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PeopleService, ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
