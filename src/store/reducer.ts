
import { ADD_TASK, DELETE_TASK, GET_TASKS, UPDATE_TASK } from "./action.types";

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
            taskList: [...state.taskList, {...payload, id: state.taskList.length + 1}]
          };
        
          case UPDATE_TASK:
            return {
              ...state, 
              taskList: updateTask(state.taskList, payload)
            };
          
          case DELETE_TASK:
            return {
              ...state, 
             taskList: deleteTask(state.taskList, payload)
            }
          default:
            return state;
        }
};

function updateTask(state, payload){
  var index = -1; 
  state.find((item, i) => item.id === payload.id ? index = i : index = -1);
  state[index] = payload;
 return [...state]
}

function deleteTask(state, id){
  var index = -1; 
  state.find((item, i) => item.id === id ? index = i : index = -1); 
  state.splice(index, 1);
return [...state];
}

