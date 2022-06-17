import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { PainelComponent } from './shared/components/painel/painel.component';
import { OrcamentoComponent } from './shared/components/orcamento/orcamento.component';
import { SuporteComponent } from './shared/components/suporte/suporte.component';
import { DicasComponent } from './shared/components/dicas/dicas.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
