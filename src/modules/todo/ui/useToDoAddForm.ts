import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { todoAddAction } from "../../../store/todo/actions";
import { IToDoAddFormValues } from "../form-values/todo-add-form-values.interface";

export const useToDoAddForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);

  const disptach = useDispatch();

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };
  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(+e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const values: IToDoAddFormValues = { title, description, value };
    disptach(todoAddAction(values));

    setTitle("");
    setDescription("");
    setValue(0);
  };

  return {
    handleChangeDescription,
    handleChangeTitle,
    handleSubmit,
    handleChangeValue,
    title,
    description,
    value,
  };
};
