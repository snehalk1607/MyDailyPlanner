import {createStore} from 'redux';
import { ManageTaskReducer } from './reducer';

/**
 * @exports
 * @constant store
 */
export const store = createStore(ManageTaskReducer);