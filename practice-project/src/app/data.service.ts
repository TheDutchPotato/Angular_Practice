import { Todo } from './todo.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private _http: HttpClient) { }

  getTodo(){
    return this._http.get<Todo[]>(this.apiUrl);
  }
  
}
