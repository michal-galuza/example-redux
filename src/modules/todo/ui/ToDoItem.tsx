import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoEditAction } from "../../../store/todo/actions";
import { IToDoEditFormValues } from "../form-values/todo-edit-form-values.interface";
import { ToDoEditForm } from "./ToDoEditForm";

interface IToDoItemData{
  title:string;
  description:string;
  value:number;
}

interface IToDoItemProps {
  todoData: IToDoItemData;
  index: number;
}
export const ToDoItem = ({ todoData, index }: IToDoItemProps): JSX.Element => {
  const [editable, setEditable] = useState(false);

  const disptach = useDispatch();

  const handleEnbaleEdit = () => {
    setEditable(!editable);
  };

  const handleSubmit = (values: IToDoEditFormValues) => {
    disptach(todoEditAction({ todo: { ...todoData, ...values }, index }));
    handleEnbaleEdit();
  };

  return (
    <div>
      <p>{todoData.title}</p>
      <p>{todoData.description}</p>
      <p>{todoData.value} SP</p>

      <button onClick={handleEnbaleEdit}>{editable ? "Close" : "Edit"}</button>

      {editable && (
        <ToDoEditForm
          values={{
            description: todoData.description,
            title: todoData.title,
            value: todoData.value,
          }}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};
