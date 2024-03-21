import {createStore} from 'redux';
import thunk from 'redux-thunk';
import { ManageTaskReducer } from './reducer';

// if (__DEV__) {
//   const createDebugger = require('redux-flipper').default;
//   middlewares.push(createDebugger());
// }

/**
 * @exports
 * @constant store
 */
export const store = createStore(ManageTaskReducer);
