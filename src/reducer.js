export const ADD_FEEDING_TIME = "ADD_FEEDING_TIME";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_FEEDING_TIME:
      const newState = [...state, action.newFeedingTime];

      return newState;

    default:
      return state;
  }
};
