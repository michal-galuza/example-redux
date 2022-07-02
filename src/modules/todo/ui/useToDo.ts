import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootStoreType } from "../../../store/store";
import { todoRemoveAction } from "../../../store/todo/actions";

export const useToDo = () => {
  const todoState = useSelector((state: RootStoreType) => state.todo);

  const dispatch = useDispatch();

  const handleRemove = (index: number) => {
    dispatch(todoRemoveAction({ value: index }));
  };

  return { todoState, handleRemove };
};
