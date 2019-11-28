const usersReducer = (state = [], action = {}) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.book];
    default:
      return state;
  }
};

export default usersReducer;
