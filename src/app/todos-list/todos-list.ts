import { Component } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatSuffix } from '@angular/material/form-field';

@Component({
  selector: 'todos-list',
  imports: [MatFormField, MatLabel, MatInput, MatIcon, MatSuffix],
  templateUrl: './todos-list.html',
  styleUrl: './todos-list.scss',
})
export class TodosList {}
