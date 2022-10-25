import { Component, OnInit } from '@angular/core';
import { TodoService, Todo } from 'src/app/services/todo.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  name: string = 'Manh';
  googleURL: string = 'https://www.google.com/?hl=vi';
  newTodo: string = '';

  todos: Todo[] = [];

  constructor(private todoService: TodoService) {
    todoService.getAllTodos().subscribe((res: Todo[]) => {
      this.todos = res;
    });
  }

  btnIncrease(eventObj) {
    this.counter += 1;
  }

  btnMinus() {
    this.counter <= 0 ? 0 : (this.counter -= 1);
  }

  onblur(value) {
    this.name = value;
  }

  addTodoList(input?) {
    //console.log(input);
    this.todos.push({
      userId: 1,
      title: this.newTodo,
      completed: false,
    });
  }

  deletedTodoList(index) {
    this.todos.splice(index, 1);
  }

  checkTatus(status, index) {
    this.todos[index].completed = !status;
  }

  counter: number = 0;

  ngOnInit(): void {}
}
