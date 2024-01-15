import { useReducer } from "react";
import AppContext from "../context/appContext";
import { appReducer } from "../reducer/appReducer";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, { tasks: [] });

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
