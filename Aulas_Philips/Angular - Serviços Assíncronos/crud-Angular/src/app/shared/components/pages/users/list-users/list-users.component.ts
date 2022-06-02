import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers () {
    this.userService.getUsers().subscribe(response => {
      this.users = response;
    })
  }

}
