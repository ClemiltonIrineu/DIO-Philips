import { Component, OnInit } from '@angular/core';
import { PeopleService } from './shared/service/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cont:number = 0;
   

  constructor (private peopleService: PeopleService){


  }

  ngOnInit(): void {
   
    let intervalo = setInterval( () => {
      this.cont++;
      if(this.cont === 10){
        clearInterval(intervalo);
      }
    }, 1000)
    
  }

  
}
