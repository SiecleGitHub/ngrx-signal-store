import { Component, inject } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatSuffix } from '@angular/material/form-field';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { MatSelectionList } from '@angular/material/list';
import { MatListOption } from '@angular/material/list';
import { TodosStore } from '../store/todos.store';

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
  ],
  templateUrl: './todos-list.html',
  styleUrl: './todos-list.scss',
})
export class TodosList {
  store = inject(TodosStore);
}
