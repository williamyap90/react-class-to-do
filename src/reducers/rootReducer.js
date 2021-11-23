import data from '../data.json';

const initState = {
  toDo: data,
};

const rootReducer = (state = initState, action) => {
  console.log(action);

  switch (action.type) {
    case 'ADD_TASK': {
      const newTask = { id: action.id, task: action.body, complete: false };
      return {
        ...state,
        toDo: [...state.toDo, newTask],
      };
    }
    case 'DELETE_TASK': {
      const updatedToDos = state.toDo.filter((item) => item.id !== action.id);
      return {
        ...state,
        toDo: updatedToDos,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
