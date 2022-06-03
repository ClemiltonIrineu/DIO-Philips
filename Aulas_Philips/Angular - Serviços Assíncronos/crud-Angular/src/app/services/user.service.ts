import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 //CRUD Creat Read Update Delete

apiURL =  'https://sheet.best/api/sheets/68e5d620-b6cc-4029-991a-fad53b0f45e8';

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

  constructor(private httpClient: HttpClient) { }

//Realizadno o Read
  getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiURL);
  }

  //Realizadno o Creat
  postUser(user: User):Observable<User>{
    return this.httpClient.post<User>(this.apiURL, user, this.httpOptions);
  }

 
  
  // Exclui o usuario do banco DELETE
  deleteUser(id: number):Observable<User> {
    return this.httpClient.delete<User>(`${this.apiURL}/id/${id}`)
  }

 
  // Edita usuario UPDATE
  updateUser(id: string, user: User):Observable<User> {
    return this.httpClient.put<User>(`${this.apiURL}/id/${id}`, user, this.httpOptions);
  }

  // Lista usuario unico
  getUser(id: string):Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiURL}/id/${id}`)
  }
  
}
