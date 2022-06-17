import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DicasComponent } from './shared/components/dicas/dicas.component';
import { OrcamentoComponent } from './shared/components/orcamento/orcamento.component';
import { PainelComponent } from './shared/components/painel/painel.component';
import { SuporteComponent } from './shared/components/suporte/suporte.component';

const routes: Routes = [
  {
    path: '',  component: PainelComponent
  },
  {
    path: 'dicas',  component: DicasComponent
  },
  {
    path: 'orcamento',  component: OrcamentoComponent
  },
  {
    path: 'suporte',  component: SuporteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
