import { useContext } from "react";
import AppContext from "../context/appContext";

export const useAppContext = () => useContext(AppContext);
