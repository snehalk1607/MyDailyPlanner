
import { ADD_TASK, DELETE_TASK, GET_TASKS, MARK_TASK_COMPLETE, UPDATE_TASK } from "./action.types";

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
            taskList: [...state.taskList, {...payload, id: state.taskList.length + 1, isComplete: false}]
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
            };
          
            case MARK_TASK_COMPLETE:
              return {
                ...state, 
               taskList: markTaskComplete(state.taskList, payload)
              };

          default:
            return state;
        }
};

function findTaskIndex (state, id){
  var index = -1; 
  state.find((item, i) => item.id === id ? index = i : index = -1);
  return index;
}

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

function markTaskComplete(state, id){
  var index = findTaskIndex(state, id);
  state[index].isComplete = !state[index].isComplete;
  return [...state];
}
