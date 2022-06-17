import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { PainelComponent } from './shared/components/painel/painel.component';
import { OrcamentoComponent } from './shared/components/orcamento/orcamento.component';
import { SuporteComponent } from './shared/components/suporte/suporte.component';
import { DicasComponent } from './shared/components/dicas/dicas.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule} from '@angular/material/card';  
import { MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PainelComponent,
    OrcamentoComponent,
    SuporteComponent,
    DicasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
