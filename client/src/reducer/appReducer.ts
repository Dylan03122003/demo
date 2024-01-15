import { AppContextState } from "../context/appContext";
import { AppActions } from "./appActions";

export const appReducer = (
  state: AppContextState,
  action: AppActions
): AppContextState => {
  switch (action.type) {
    case "AddTask":
      return {
        ...state,
        tasks: [...state.tasks, action.newTask],
      };
    case "DeleteTask":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };
    default:
      return state;
  }
};
