import { useToDoAddForm } from "./useToDoAddForm";

export const ToDoAddForm = () => {
  const {
    description,
    handleChangeDescription,
    handleChangeTitle,
    handleChangeValue,
    handleSubmit,
    title,
    value,
  } = useToDoAddForm();

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
      <button type="submit">Dodaj</button>
    </form>
  );
};
