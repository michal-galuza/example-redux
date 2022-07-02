import { ToDoAddForm } from "./ToDoAddForm";
import { ToDoItem } from "./ToDoItem";
import { useToDo } from "./useToDo";

export const ToDo = (): JSX.Element => {
  const { handleRemove, todoState } = useToDo();
  return (
    <div>
      <h1>TODO</h1>
      <ToDoAddForm />
      {todoState.todos.map((todo, index) => (
        <div key={`${todo.title}/${todo}/${index}`}>
          <ToDoItem index={index} todoData={todo} />
          <button onClick={() => handleRemove(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};
