import data from '../data.json';
import * as actionTypes from '../actions/actionTypes';

const initState = {
  toDo: data,
  filter: 'SHOW_ALL',
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TASK: {
      const newTask = { id: action.id, task: action.body, complete: false };
      return {
        ...state,
        toDo: [...state.toDo, newTask],
      };
    }
    case actionTypes.DELETE_TASK: {
      const updatedToDos = state.toDo.filter((item) => item.id !== action.id);
      return {
        ...state,
        toDo: updatedToDos,
      };
    }
    case actionTypes.TOGGLE_CHECKED: {
      const updateToDos = state.toDo.map((item) => {
        if (item.id === action.id) {
          return { ...item, complete: action.isChecked };
        }
        return item;
      });
      return {
        ...state,
        toDo: updateToDos,
      };
    }
    case actionTypes.EDIT_TASK: {
      const updatedToDos = state.toDo.map((item) => {
        if (item.id === action.id) {
          return { ...item, task: action.body };
        }
        return item;
      });
      return {
        ...state,
        toDo: updatedToDos,
      };
    }
    case actionTypes.UPDATE_FILTER: {
      return {
        ...state,
        filter: action.filter,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
