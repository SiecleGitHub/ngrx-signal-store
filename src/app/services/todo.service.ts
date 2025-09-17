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

  async addTodo(todo: Partial<Todo>): Promise<Todo> {
    await sleep(500); // Simulate network delay
    return {
      id: Math.random().toString(36).substring(2, 9),
      ...todo,
    } as Todo;
  }

  async deleteTodo(id: string) {
    await sleep(500); // Simulate network delay
  }

  async updateTodo(id: string, completed: boolean) {
    await sleep(500); // Simulate network delay
  }
}

export async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
