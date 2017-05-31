import { combineReducers } from 'redux';

import todo      from './todo'
import findTodos from './findTodos'

export default combineReducers({
  todo,
  findTodos
});
