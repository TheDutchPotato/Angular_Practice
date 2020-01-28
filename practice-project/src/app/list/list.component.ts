import { DataService } from './../data.service';
import { Todo } from './../todo.model';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  todos$: Todo[];
  constructor(private DatasService: DataService){}

  ngOnInit(){
    this.DatasService.getTodo().subscribe(data => this.todos$ = data);
  }
}
