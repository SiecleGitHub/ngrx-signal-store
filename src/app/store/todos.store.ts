import { inject, computed } from '@angular/core';
import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { TodosService } from '../services/todo.service';

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export type TodosFilter = 'all' | 'active' | 'completed';

export type TodosState = {
  todos: Todo[];
  loading: boolean;
  filter: TodosFilter;
};

const initialState: TodosState = {
  todos: [],
  loading: false,
  filter: 'all',
};

export const TodosStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, todosService = inject(TodosService)) => {
    // derived signal
    const filteredTodos = computed(() => {
      const todos = store.todos();
      const filter = store.filter();

      switch (filter) {
        case 'active':
          return todos.filter((t) => !t.completed);
        case 'completed':
          return todos.filter((t) => t.completed);
        default:
          return todos;
      }
    });

    return {
      // expose derived signal
      filteredTodos,

      async loadAll() {
        patchState(store, { loading: true });
        const todos = await todosService.getTodos();
        patchState(store, { todos, loading: false });
      },

      async addTodo(title: string) {
        const newTodo = await todosService.addTodo({
          title,
          completed: false,
        });
        patchState(store, (state) => ({
          todos: [...state.todos, newTodo],
        }));
      },

      async deleteTodo(id: string) {
        await todosService.deleteTodo(id);
        patchState(store, (state) => ({
          todos: state.todos.filter((t) => t.id !== id),
        }));
      },

      async updateTodo(id: string, completed: boolean) {
        await todosService.updateTodo(id, completed);
        patchState(store, (state) => ({
          todos: state.todos.map((t) => (t.id === id ? { ...t, completed } : t)),
        }));
      },

      updateFilter(filter: TodosFilter) {
        patchState(store, { filter });
      },
    };
  })
);
