
import { Task } from "react-native";
import { PRIORITY_LEVELS } from "../screens/add-new-task/add-edit-task.types";
import { ADD_TASK, GET_TASKS, UPDATE_TASK } from "./action.types";

const initialState = {
    taskList: []
}

export const ManageTaskReducer = (state = initialState, action: any) => {
    const {type, payload} = action; 
    switch (type) {
        case GET_TASKS:
          return {
            ...state,
            taskList: state
          };
    
        case ADD_TASK:
          return {
            ...state,
            taskList: [...state.taskList, payload]
          };
        
          default:
            return state;
        }
};