import { Injectable } from '@angular/core';
import { TODOS } from '../model/mock.data';
import { Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  async getTodos(): Promise<Todo[]> {
    await sleep(1000); // Simulate network delay
    return TODOS;
  }
}

export async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
