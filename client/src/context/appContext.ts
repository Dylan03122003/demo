import { createContext } from "react";
import { AppActions } from "../reducer/appActions";

export interface Task {
  id: number;
  title: string;
}

export interface AppContextState {
  tasks: Task[];
}

interface AppContextProps {
  state: AppContextState;
  dispatch: React.Dispatch<AppActions>;
}

const AppContext = createContext<AppContextProps>({} as AppContextProps);

export default AppContext;
