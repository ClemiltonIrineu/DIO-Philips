import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople():Observable<any> {
    let peopleArray = [
    {
      name: "CIAS",
      sobrenome: "Tec",
      idade: 2
    },
    {
      name: "Clemilton",
      sobrenome: "Irineu",
      idade: 28
    },
    {
      name: "Nill",
      sobrenome: " & Ganesha",
      idade: 3
    },
    {
      name: "Amor",
      sobrenome: "Ganesha",
      idade: 28
    }
    ]

    return of(peopleArray);
  }
  
}
