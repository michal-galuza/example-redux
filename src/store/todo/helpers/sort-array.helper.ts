import { IToDoEntity, ToDoSortTypesEnum } from "../todo";
import { sortByNameCompareHelper } from "./sort-by-name.helper";
import { sortByValueCompareHelper } from "./sort-by-value.helper";

export const sortArrayHelper = (
  arr: IToDoEntity[],
  sortBy: ToDoSortTypesEnum
): IToDoEntity[] => {
  switch (sortBy) {
    case ToDoSortTypesEnum.BY_NAME:
      return arr.sort(sortByNameCompareHelper);
    case ToDoSortTypesEnum.BY_VALUE:
      return arr.sort(sortByValueCompareHelper);
    default:
      return arr;
  }
};
