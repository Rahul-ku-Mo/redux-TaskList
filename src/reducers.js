const intialState = {
  todos: [],
};

export const todoReducer = (state = intialState, action) => {
  switch (action.type) {
    case "add_todo": {
      return { ...state, todos: [...state.todos, { item: action.payload }] };
    }
    case "delete_todo":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.item !== action.payload),
      };
    case "update_todo":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.item === action.payload.preV)
            return { ...todo, item: action.payload.newV };

          return todo;
        }),
      };
    default:
      return state;
  }
};

