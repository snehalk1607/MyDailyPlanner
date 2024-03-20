import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { ViewTaskList } from './screens/view-task-list/view-tasklist.screen';
import { AddOrEditTask } from './screens/add-new-task/add-edit-task.screen';
import { NavigationContainer } from '@react-navigation/native';
import { ROOT_NAVIGATOR_SCREENS } from './router.enum';
import { Task } from './services/task.types';
import { UPDATE_TASK } from './store/action.types';

 export type ROOT_NAVIGATION_PARAMS = {
  VIEW_TASK_LIST : {task: Task, action: typeof UPDATE_TASK},
  ADD_EDIT_TASK : {task: Task, action: typeof UPDATE_TASK}
};

const Stack = createNativeStackNavigator<ROOT_NAVIGATION_PARAMS>();
const {VIEW_TASK_LIST, ADD_EDIT_TASK} = ROOT_NAVIGATOR_SCREENS;

export const RootRouter = () => (
    
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={VIEW_TASK_LIST}>
      <Stack.Screen name={VIEW_TASK_LIST} component={ViewTaskList} />
      <Stack.Screen name={ADD_EDIT_TASK} component={AddOrEditTask} />
    </Stack.Navigator>  
    </NavigationContainer>
  );