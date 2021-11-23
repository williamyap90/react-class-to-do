import data from '../data.json';

const initState = {
  toDo: data,
};

const rootReducer = (state = initState, action) => {
  console.log(action);

  if (action.type === 'ADD_TASK') {
    const newTask = { id: action.id, task: action.body, complete: false };
    return {
      ...state,
      toDo: [...state.toDo, newTask],
    };
  }

  return state;
};

export default rootReducer;
