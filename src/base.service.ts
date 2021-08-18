import { BehaviorSubject } from "rxjs";

import { BaseService } from "./base-service.class";

export const BaseServiceImpl: BaseService = Object.freeze({
  list$: new BehaviorSubject<string[]>([]),
  addTodo(todo: string): void {
    this.list$.next([...this.list$.getValue(), todo]);
  },
});
