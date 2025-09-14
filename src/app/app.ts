import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosStore } from './store/todos.store';
import { TodosList } from './todos-list/todos-list';
import { MatSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodosList, MatSpinner],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  store = inject(TodosStore);

  ngOnInit(): void {
    this.loadTodos().then(() => {
      console.log('Todos loaded');
    });
  }

  async loadTodos() {
    await this.store.loadAll();
  }
}
