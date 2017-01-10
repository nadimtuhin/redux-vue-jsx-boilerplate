import { createStore } from 'redux';

const initialState = {
  todos: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload.todo]
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
