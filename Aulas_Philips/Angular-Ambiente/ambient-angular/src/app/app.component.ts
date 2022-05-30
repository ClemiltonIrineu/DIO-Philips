import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cont:number = 0;
  pessoas = [
    {
      name: "CIAS",
      sobrenome: "Tec"
    },
    {
      name: "Clemilton",
      sobrenome: "Irineu"
    },
    {
      name: "Nill",
      sobrenome: " & Ganesha"
    },
    {
      name: "Johnny",
      sobrenome: "Araujo"
    },
  ]
  constructor (){

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
