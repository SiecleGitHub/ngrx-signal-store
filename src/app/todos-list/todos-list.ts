import { Component, inject } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatSuffix } from '@angular/material/form-field';
import { MatButtonToggleGroup, MatButtonToggle } from '@angular/material/button-toggle';
import { MatCheckbox } from '@angular/material/checkbox';
import { NgStyle } from '@angular/common';
import { TodosFilter, TodosStore } from '../store/todos.store';

@Component({
  selector: 'todos-list',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    MatIcon,
    MatSuffix,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatCheckbox,
    NgStyle,
  ],
  templateUrl: './todos-list.html',
  styleUrl: './todos-list.scss',
})
export class TodosList {
  store = inject(TodosStore);

  async onAddTodo(title: string) {
    if (title.trim()) {
      await this.store.addTodo(title.trim());
    }
  }

  async onDeleteTodo(id: string, event: MouseEvent) {
    event.stopPropagation();
    await this.store.deleteTodo(id);
  }

  async updateTodo(id: string, completed: boolean) {
    await this.store.updateTodo(id, completed);
  }

  onFilterChange(filter: TodosFilter) {
    this.store.updateFilter(filter);
  }
}
