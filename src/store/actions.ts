import { ADD_TASK, DELETE_TASK, GET_TASKS, MARK_TASK_COMPLETE, UPDATE_TASK } from './action.types';
import { Task } from "../services/task.types";


export const setTaskList = (taskList : Task[]) => ({
    type: GET_TASKS,
    payload: taskList
}
);

export const addTask = (task: Task) => ({
    type: ADD_TASK,
    payload: task
});

export const updateTask = (task: Task) => ({
    type: UPDATE_TASK,
    payload: task
});

export const deleteTask = (id: number) => ({
    type: DELETE_TASK,
    payload: id
});

export const markTaskComplete = (id: number) => ({
    type: MARK_TASK_COMPLETE,
    payload: id
});

