import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: Array<User> = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers () {
    this.userService.getUsers().subscribe(response => {
      this.users = response;
    })
  }

  deleteUser (id: number){
    this.userService.deleteUser(id).subscribe(response => {
     // console.log("Usuario Excluido")
      alert("Usuario Excluido")
    }, (err) => {
      console.log(err)
    }, () => {
      this.getUsers();
    })
  }

}

