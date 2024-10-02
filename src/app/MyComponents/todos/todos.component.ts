import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,  // This should be true if it's a standalone component
  imports: [CommonModule,TodoItemComponent, AddTodoComponent],  // Ensure CommonModule is imported
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
  todos: Todo[] = []; // Initialize an empty array
  localItem!: string | null;

  constructor() {
    
  }
  ngOnInit(): void {
    this.localItem = localStorage.getItem ("todos");
    if(this.localItem == null){
      this.todos = [];
    }
    else{
      this.todos = JSON.parse(this.localItem!) as Todo[];
    }
    // Simulated data (replace with actual data retrieval logic if needed)
  }
  deleteTodo(todo: Todo){
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addTodo(todo: Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  toggleTodo(todo: Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].Active = !this.todos[index].Active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
