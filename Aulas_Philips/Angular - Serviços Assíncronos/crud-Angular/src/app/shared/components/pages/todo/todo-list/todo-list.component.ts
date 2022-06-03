import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todo: Array<Todo> = [];

  constructor() { }

  ngOnInit(): void {

  }

  addTodo (title: string){
    const id = this.todo.length + 1;
    this.todo.push(new Todo(id, title, false)) 
    console.log(this.todo);
  
  }

   
    
}
