import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,TodosComponent,TodoItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cwh-todo-list';
  constructor(){
    // setTimeout(() => {
    //   this.title = "Title Changed";
    // }, 2000);
  }
}
