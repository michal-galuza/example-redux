import { IToDoEditFormValues } from "../form-values/todo-edit-form-values.interface";
import { useToDoEditForm } from "./useToDoEditForm";

interface IToDoEditFormProps {
  values: IToDoEditFormValues;
  onSubmit: (values: IToDoEditFormValues) => void;
}
export const ToDoEditForm = (props: IToDoEditFormProps): JSX.Element => {
  const {
    description,
    handleChangeDescription,
    handleChangeTitle,
    handleChangeValue,
    handleSubmit,
    title,
    value,
  } = useToDoEditForm(props);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type={"text"}
        name={"title"}
        value={title}
        onChange={handleChangeTitle}
      />
      <input
        type={"text"}
        name={"description"}
        value={description}
        onChange={handleChangeDescription}
      />
      <input
        type={"number"}
        name={"value"}
        value={value}
        onChange={handleChangeValue}
      />
      <button type="submit">Save</button>
    </form>
  );
};
