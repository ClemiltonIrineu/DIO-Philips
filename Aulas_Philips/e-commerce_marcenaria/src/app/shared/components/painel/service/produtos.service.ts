import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produtos } from 'src/app/models/produtos';



@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  apiURL = 'https://sheet.best/api/sheets/aa6f0c8f-ca02-4170-b1a7-cb0eb4ce5011';
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor(private  httpClient: HttpClient) { }

  getProducts():Observable<Produtos[]>{
    return this.httpClient.get<Produtos[]>(this.apiURL);
  }
}
