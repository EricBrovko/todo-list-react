const initialTasks = '';

export default function todoList(state=initialTasks, action) {
  if(action.type === 'FIND_TASK') {
    return action.searchValue;
  }

  return state;
}
