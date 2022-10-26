import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export interface Todo {
  userId: number;
  id?: number | string;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];
  private baseURL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}
  getAllTodos() {
    return this.http.get(this.baseURL + '/todos');
  }
  deleteTodo(id) {
    return this.http.delete(this.baseURL + '/todos/' + id);
  }
}
