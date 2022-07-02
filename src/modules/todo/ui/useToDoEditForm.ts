import { ChangeEvent, FormEvent, useState } from "react";
import { IToDoEditFormValues } from "../form-values/todo-edit-form-values.interface";

interface IUseToDoEditFormProps {
  values: IToDoEditFormValues;
  onSubmit: (values: IToDoEditFormValues) => void;
}
export const useToDoEditForm = ({
  onSubmit,
  values,
}: IUseToDoEditFormProps) => {
  const [title, setTitle] = useState(values.title);
  const [description, setDescription] = useState(values.description);
  const [value, setValue] = useState(values.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ description, title, value });
  };
  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };
  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(+e.target.value);
  };

  return {
    title,
    description,
    value,
    handleSubmit,
    handleChangeDescription,
    handleChangeTitle,
    handleChangeValue,
  };
};
