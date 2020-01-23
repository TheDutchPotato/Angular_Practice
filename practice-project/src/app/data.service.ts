import { Todo } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
 apiUrl = 'https://jsonplaceholder.typicode.com/todos'
  constructor(private _http: HttpClient) { }

  
  getTodo() {
    return this._http.get<Todo[]>(this.apiUrl);
  }
}
