/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView,StyleSheet} from 'react-native';
import { Provider } from 'react-redux'

import { RootRouter } from './src/router';
import { store } from './src/store/store';
import { TaskServices } from './src/services/tasks.services';
import { SET_TASKS } from './src/store/action.types';

type SectionProps = PropsWithChildren<{
  title: string;
}>;


const App: React.FC = () => {
  useEffect(() => {
    let taskList1 = [];
    TaskServices.fetchData().then(data => Object.entries(data).map(([key, value]) => {            
          taskList1.push(value)
          store.dispatch({type: SET_TASKS, payload: taskList1})                   
      }
          )) 
  })
  return (
    <Provider store= {store}>
    <SafeAreaView style={{ backgroundColor:'#0077B6', flex:1}}>     
       <RootRouter/>       
    </SafeAreaView>
    </Provider>   

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
