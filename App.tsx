/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView,StyleSheet} from 'react-native';
import { Provider } from 'react-redux'

import { RootRouter } from './src/router';
import { store } from './src/store/store';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
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
