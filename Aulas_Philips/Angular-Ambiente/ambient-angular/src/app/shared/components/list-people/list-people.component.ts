import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../service/people.service';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit {

  pessoas = [
    {
      name: "Nullo",
      sobrenome: "N",
      idade: 0
    }
   ];
   
  constructor (private peopleService: PeopleService){

  }

  ngOnInit(): void {
    this.getPeopleApp(); 
    
  }

  getPeopleApp(){
    this.peopleService.getPeople().subscribe( people => {
      this.pessoas = people;
    })
  }
}
