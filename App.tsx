/**
 * fileName: App.tsx
 * description: This is the main component of the application
 */

import React, { useEffect } from 'react';
import {SafeAreaView} from 'react-native';
import { Provider } from 'react-redux'

import { RootRouter } from './src/router';
import { store } from './src/store/store';
import { TaskServices } from './src/services/tasks.services';
import { SET_TASKS } from './src/store/action.types';
import { ColorPalete } from './constants/color-palete';
import { NetworkProvider } from './src/providers/network.provider';

/**
 * @export
 * @class App
 * @component
 */
const App: React.FC = () => {
  useEffect(() => {
    let taskList = [];
    TaskServices.fetchData().then(data => Object.entries(data).map(([_, value]) => {            
          taskList.push(value)
          store.dispatch({type: SET_TASKS, payload: taskList})                   
      }
      ));
  });

  return (
    <Provider store= {store}>
    <NetworkProvider>
    <SafeAreaView style={{ backgroundColor: ColorPalete.BLUE, flex:1}}> 
    {/* <NetworkProvider>    */}
       <RootRouter/> 
       {/* </NetworkProvider>        */}
    </SafeAreaView>
    </NetworkProvider>
    </Provider>   
  );
}

export default App;
