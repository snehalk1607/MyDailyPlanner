
import { Task } from "../services/task.types";
import { TaskServices } from "../services/tasks.services";
import { ADD_TASK, DELETE_TASK, GET_TASKS, MARK_TASK_COMPLETE, SET_TASKS, UPDATE_TASK } from "./action.types";

const initialState:{ taskList: Task[]} = {
    taskList : []
};

export const ManageTaskReducer = (state = initialState, action: {type: string, payload: Task }) => {
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

 function addTaskToRedux(taskList: Task[], payload: Task): Task[]{
  try{
  const id = Math.floor(1000 + Math.random() * 9000);
  let state:Task[] = [];
  const modifyPayload = {...payload, id: id , isComplete: false};
   TaskServices.addTask(modifyPayload);
  state = [...taskList, modifyPayload];
  return [...state];
  }
  catch(error){return [...taskList]}
};

 function updateTaskToRedux(state: Task[], payload: Task):Task[]{
  try{
 var index = state.findIndex(item => item.id === payload.id);
 let newArray: Task[]  = [];
   TaskServices.updateTask(payload);
  newArray = [...state.slice(0, index), payload,...state.slice(index + 1)];
  return [...newArray];  
  } 
  catch(error){return [...state]}            
};

function deleteTaskToRedux(state: Task[], payload: Pick<Task, 'id'>): Task[]{
  try{
  var index = state.findIndex(item => item.id === payload.id);
   TaskServices.deleteTask(payload.id);
   (state.splice(index, 1));
   return [...state];
  }
  catch(error){return [...state]}
};

function markTaskCompleteToRedux(state: Task[], payload: Pick<Task, 'id' | 'isComplete'>): Task[]{
  try{
  var index = state.findIndex(item => item.id === payload.id);
  TaskServices.updateCompletionOfTask(payload);
  state[index].isComplete = !payload.isComplete;
  return [...state];
  }
  catch(error){return [...state]}
};
