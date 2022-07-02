import { ToDoActionsNamesEnum } from "./actions/todo-actions-names.enum";
import { IToDoAddAction } from "./actions/todo-add.action";
import { IToDoEditAction } from "./actions/todo-edit.action";
import { IToDoRemoveAction } from "./actions/todo-remove.action";
import { IToDoSortAction } from "./actions/todo-sort.action";
import { IToDoState, ToDoSortTypesEnum } from "./todo";

type Action =
  | IToDoAddAction
  | IToDoEditAction
  | IToDoSortAction
  | IToDoRemoveAction;

const initialState: IToDoState = {
  sortedBy: ToDoSortTypesEnum.BY_NAME,
  todos: [],
};

export const toDoReducer = (
  state: IToDoState = initialState,
  action: Action
): IToDoState => {
  switch (action.type) {
    case ToDoActionsNamesEnum.ADD:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case ToDoActionsNamesEnum.REMOVE:
      return {
        ...state,
        todos: state.todos.filter(
          (_value, index) => index !== action.payload.value
        ),
      };
    case ToDoActionsNamesEnum.EDIT:
      const todos = state.todos.map((todo, index) => {
        if (action.payload.index === index) {
          return { ...todo, ...action.payload.todo };
        }
        return todo;
      });
      return {
        ...state,
        todos: todos,
      };
    case ToDoActionsNamesEnum.SORT:
      return {
        ...state,
        todos: [...state.todos],
      };
    default:
      return state;
  }
};
