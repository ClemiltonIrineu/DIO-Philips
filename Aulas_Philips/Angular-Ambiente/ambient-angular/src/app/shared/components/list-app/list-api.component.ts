import { Component, OnInit } from '@angular/core';
import { ListService } from '../../service/list.service';

@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.component.html',
})
export class ListApiComponent implements OnInit {

  listPersonagens: Array<any> = [];

  constructor(private listServices: ListService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.listServices.getList().subscribe(result => {
      this.listPersonagens = result?.results;
     //console.log(this.listPersonagens)
      
    })
  }

}
