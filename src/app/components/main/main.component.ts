import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  name: string = 'Manh';
  googleURL: string = 'https://www.google.com/?hl=vi';
  newTodo: string = '';

  todos: {
    userId: number;
    id?: number;
    title: string;
    completed: boolean;
  }[] = [
    {
      userId: 1,
      id: 1,
      title: 'Delectus aut autem',
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: 'Quis ut nam facilis et officia qui',
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: 'Fugiat veniam minus',
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: 'Et porro tempora',
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      title: 'Laboriosam mollitia et enim quasi adipisci quia provident illum',
      completed: false,
    },
  ];

  constructor() {}

  btnIncrease(eventObj) {
    this.counter += 1;
  }

  btnMinus() {
    this.counter <= 0 ? 0 : (this.counter -= 1);
  }

  onblur(value) {
    this.name = value;
  }

  addTodoList(input) {
    console.log(input);
    this.todos.unshift({
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
