import { Task } from "./services/task.types";

export enum ROOT_NAVIGATOR_SCREENS {
    VIEW_TASK_LIST = 'VIEW_TASK_LIST',
    ADD_EDIT_TASK = 'ADD_EDIT_TASK'
}; 

type EmptyObject = {
    [K in any] : never
}

type payload = {task: Task | EmptyObject; action: string};

export type TaskListParamList ={
  VIEW_TASK_LIST : undefined;
  ADD_EDIT_TASK : payload
};
