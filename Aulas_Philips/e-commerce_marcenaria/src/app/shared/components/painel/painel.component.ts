import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/produtos';
import { ProdutosService } from './service/produtos.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  produtos: Array<Produtos> = [];


  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.produtosService.getProducts().subscribe(response => {
      this.produtos = response;
    })

  }
}
