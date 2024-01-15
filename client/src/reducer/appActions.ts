import { Task } from "../context/appContext";

type AddTask = {
  type: "AddTask";
  newTask: Task;
};

type DeleteTask = {
  type: "DeleteTask";
  id: number;
};

export type AppActions = AddTask | DeleteTask;
