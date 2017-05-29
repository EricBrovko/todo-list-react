const initialTasks = [
  {
    id: 1,
    task: 'make React app',
    isCompleted: false
  },
  {
    id: 2,
    task: 'learn React',
    isCompleted: true
  }
];

export default function todoList(state=initialTasks, action) {
  if(action.type === 'ADD_TASK') {
    action.task.id = state.length + 1;

    return [
      ...state,
      action.task
    ];
  } else if (action.type === 'TOGGLE_TASK') {
    let searchItem = state.findIndex((item) => {
      return item.id === action.task.id;
    });
    state[searchItem].isCompleted = action.task.isCompleted;

    return [
      ...state
    ]; // [state[0], state[1] ...]
  } else if(action.type === 'SAVE_TASK') {
    let searchItem = state.findIndex((item) => {
      return item.id === action.task.id;
    });
    state[searchItem].task = action.task.value;

    return [
      ...state
    ];
  }
  return state;
}
