import { Component, effect, inject, viewChild } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatSuffix } from '@angular/material/form-field';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { MatSelectionList } from '@angular/material/list';
import { MatListOption } from '@angular/material/list';
import { TodosFilter, TodosStore } from '../store/todos.store';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'todos-list',
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    MatIcon,
    MatSuffix,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatSelectionList,
    MatListOption,
    NgStyle,
  ],
  templateUrl: './todos-list.html',
  styleUrl: './todos-list.scss',
})
export class TodosList {
  store = inject(TodosStore);

  filter = viewChild.required(MatButtonToggleGroup);

  constructor() {
    effect(() => {
      console.log('Filter is now:', this.store.filter());
      console.log('Filtered todos:', this.store.filteredTodos());
    });
  }

  async onAddTodo(title: string) {
    await this.store.addTodo(title);
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
