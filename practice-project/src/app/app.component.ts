import { DataService } from './data.service';
import { Todo } from './user.model';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  Todos: Todo[];
  constructor(private DataService: DataService){}

  ngOnInit(){
    return this.DataService.getTodo().subscribe(data=> this.Todos = data);
  }
}
