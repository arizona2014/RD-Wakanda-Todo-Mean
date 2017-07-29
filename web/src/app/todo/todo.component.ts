import { Component, OnInit } from '@angular/core';
import { Wakanda } from '../wakanda.service';

@Component({
  selector: 'app-todo',
  providers: [Wakanda],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {


    todos = [];

    newTodoText: string = '';

    constructor(public wakanda: Wakanda) {

    }

    ngOnInit() {}

    getTodos() {
        this.wakanda.getCatalog().then(ds => {
            ds['Todo'].query()
                .then(collection => {
                    this.todos = collection.entities;
                });
        });
    }

    newTodo() {
        this.wakanda.getCatalog().then(ds => {
            let todo = ds['Todo'].create({
                label: this.newTodoText,
                completed: false
            });

            todo.save()
                .then(() => {
                    alert('saved')
                    this.todos.push({
                        ID: todo['ID'],
                        label: this.newTodoText,
                        completed: false
                    });

                    this.newTodoText = ""; //clear the input 
                });
        });
    }

}
