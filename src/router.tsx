/**
 * fileName: router.tsx
 * description: This is the root router configuration file
 */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { ViewTaskList } from './screens/view-task-list/view-tasklist.screen';
import { AddOrEditTask } from './screens/add-new-task/add-edit-task.screen';
import { ROOT_NAVIGATOR_SCREENS } from './router.enum';
import { Task } from './services/task.types';

type payload = {task: Task; action: string};

export type RootStackParamListTypes = Record<ROOT_NAVIGATOR_SCREENS, payload>
const Stack = createNativeStackNavigator<RootStackParamListTypes>();
const {VIEW_TASK_LIST, ADD_EDIT_TASK} = ROOT_NAVIGATOR_SCREENS;

export const RootRouter = (): React.ReactElement => (    
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={VIEW_TASK_LIST}>
      <Stack.Screen name={VIEW_TASK_LIST} component={ViewTaskList} />
      <Stack.Screen name={ADD_EDIT_TASK} component={AddOrEditTask} />
    </Stack.Navigator>  
    </NavigationContainer>
  );