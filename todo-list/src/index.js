import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import './styles/index.css';

const initialTasks = [
  {
    task: 'make React app',
    isCompleted: false
  },
  {
    task: 'show tasks',
    isCompleted: false
  },
  {
    task: 'learn React',
    isCompleted: true
  }
];

function todoList(state=initialTasks, action) {
  if(action.type === 'ADD_TASK') {
    return [
      ...state,
      action.task
    ];
  }
  return state;
}

const store = createStore(
  todoList,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
