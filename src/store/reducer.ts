
import { TaskServices } from "../services/tasks.services";
import { ADD_TASK, DELETE_TASK, GET_TASKS, MARK_TASK_COMPLETE, SET_TASKS, UPDATE_TASK } from "./action.types";
import { store } from "./store";

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

          case SET_TASKS:
            return {
              ...state,
              taskList: payload
            };
    
        case ADD_TASK:
          return {
            ...state,
            taskList: addTaskToRedux(state.taskList, payload)
          };
        
          case UPDATE_TASK:
            return {
              ...state, 
              taskList: updateTaskToRedux(state.taskList, payload)
            };
          
          case DELETE_TASK:
            return {
              ...state, 
             taskList: deleteTaskToRedux(state.taskList, payload)
            };
          
            case MARK_TASK_COMPLETE:
              return {
                ...state, 
               taskList: markTaskCompleteToRedux(state.taskList, payload)
              };
            

          default:
            return state;
        }
};

function addTaskToRedux(taskList, payload){
  let state = [];
  const modifyPayload = {...payload, id: taskList.length + 1, isComplete: false};
  TaskServices.addTask(modifyPayload).then(
   state = [...taskList, modifyPayload]
  );
  return [...state];
}

function updateTaskToRedux(state, payload){
 var index = state.findIndex(item => item.id === payload.id);
 let newArray  = [];
  TaskServices.updateTask(payload).then(newArray = [...state.slice(0, index), payload,...state.slice(index + 1)]);
  return [...newArray];               
}

function deleteTaskToRedux(state, id){
  var index = state.findIndex(item => item.id === id);
   TaskServices.deleteTask(id).then(state.splice(index, 1));
   return [...state];
}

function markTaskCompleteToRedux(state, payload){
  var index = state.findIndex(item => item.id === payload.id);
  TaskServices.updateCompletionOfTask(payload).then(state[index].isComplete = !payload.isComplete);
  return [...state];
}
