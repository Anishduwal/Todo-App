import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,  // This should be true if it's a standalone component
  imports: [CommonModule],  // Ensure CommonModule is imported
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  constructor(){}

  ngOnInit(): void{
  }
  onClick(todo : Todo){
    this.todoDelete.emit(todo);
    console.log("Delete button is clicked");
  }
  onCheckboxClick(todo : Todo){
    this.todoCheckbox.emit(todo);
  }
}
