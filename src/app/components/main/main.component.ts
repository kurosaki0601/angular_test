import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';

interface TodoType {
  id: string;
  content: string;
  complete: boolean;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  name: string = 'Manh';
  c: number = 0;
  temp: boolean = false;
  //listTodo: string[] = ['Todo 1', 'Todo 2', 'Todo 3'];
  listTodo: TodoType[] = [
    {
      id: '1',
      content: 'todo 1',
      complete: false,
    },
    {
      id: '2',
      content: 'todo 2',
      complete: false,
    },
    {
      id: '3',
      content: 'todo 3',
      complete: false,
    },
  ];
  colspan: number = 5;
  constructor() {}
  googleURL: string = 'https://www.google.com.vn/?hl=vi';
  // handleAddInput() {
  //   this.listTodo.push(this.name);
  //   this.name = '';
  // }
  handleAddInput() {
    this.listTodo.push({
      id: '20',
      content: this.name,
      complete: false,
    });
    this.name = '';
  }
  delete() {
    let filterObj = this.listTodo.filter((item) => item.content !== 'todo 2');
    console.log(filterObj);
  }

  ngOnInit(): void {}

  onBtnClick() {
    console.log('clicked');
  }

  increase(event) {
    this.c = this.c + 1;
    console.log(event);
  }
  decrease(event) {
    this.c = this.c - 1;
  }
}
